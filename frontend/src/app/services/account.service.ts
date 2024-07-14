import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountModel } from '../models/account.model';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private httpClient: HttpClient) {}
  async getByAccountNumber(accountNumber: number): Promise<AccountModel[]>{
    const observable = this.httpClient.get<AccountModel[]>(environment.accountUrl + `/${accountNumber}`);
    const account = await firstValueFrom(observable);
    return account;
  }
  async add(account: AccountModel): Promise<AccountModel> {
    const observable = this.httpClient.post<AccountModel>(
      environment.accountUrl,
      account
    );
    const newAccount = await firstValueFrom(observable);
    return newAccount;
  }



}
