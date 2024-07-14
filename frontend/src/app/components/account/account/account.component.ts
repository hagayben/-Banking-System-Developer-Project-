import { Component, OnInit } from '@angular/core';
import { AccountModel } from '../../../models/account.model';
import { Title } from '@angular/platform-browser';
import { AccountService } from '../../../services/account.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {

  public account?: AccountModel[];
  public accountNumber?: number;

  public constructor(
    private title: Title,
    private eaccountService: AccountService,
   
  ){}
  public async ngOnInit() {
    this.title.setTitle('Details of account');
  }

  public async changeAccount(){
    if (this.accountNumber) {
       this.account = await this.eaccountService.getByAccountNumber(this.accountNumber);
  
    }
  
  }

}
