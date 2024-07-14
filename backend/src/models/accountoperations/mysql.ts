import Model from "./model";
import DTO from "./dto";
import query from "../../db/mysql";
import { OkPacketParams } from "mysql2";

class Account implements Model {
  public async getAllByAccount(accountNumber: number): Promise<DTO[]> {
    const account = await query(
      `
    SELECT
    objectId,
    accountNumber,
    types,
    price,
    date,
    interest,
    amountOfPayments,
    dateOfLoan
      FROM accountoperations
      WHERE   accountNumber = ?
      `,
      [accountNumber]
    );
    return account;
  }

  public async getOne(objectId: number): Promise<DTO> {
    const account = (
      await query(
        `
        SELECT
        objectId,
        accountNumber,
        types,
        price,
        date,
        interest,
        amountOfPayments,
        dateOfLoan
          FROM accountoperations
            WHERE   objectId = ?
        `,
        [objectId]
      )
    )[0];
    return account;
  }

  public async add(account: DTO): Promise<DTO> {
    const {
      objectId,
      accountNumber,
      types,
      price,
      interest,
      amountOfPayments,
      dateOfLoan,
    } = account;
    const result: OkPacketParams = await query(
      `
        INSERT INTO accountoperations ( accountNumber ,types, price, interest, amountOfPayments,dateOfLoan, date)
        VALUES (?, ?, ?, ?, ?,?, NOW())
    `,
      [accountNumber, types, price, interest, amountOfPayments, dateOfLoan]
    );
    return this.getOne(result.insertId);
  }
}

const account = new Account();
export default account;
