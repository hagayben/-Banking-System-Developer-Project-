import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AccountService } from '../../../services/account.service';
import { Router } from '@angular/router';
import { AccountModel } from '../../../models/account.model';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent implements OnInit {
  public constructor(
    private title: Title,
    private accountService: AccountService,
    private router: Router
  ) {}

  public account = new AccountModel();

  public async submitForm() {
    console.log(this.account);

    const newAccount = await this.accountService.add(this.account)
    alert(`added a new action in the account:${newAccount.accountNumber}`)
    this.router.navigateByUrl('account');
  }

  public async ngOnInit() {
    this.title.setTitle('Add an account action');
  }
}
