import DTO from "./dto";

export default interface Model {
  getAllByAccount(accountNumber: number): Promise<DTO[]>;
  add(accounts: DTO): Promise<DTO>;
  
}
