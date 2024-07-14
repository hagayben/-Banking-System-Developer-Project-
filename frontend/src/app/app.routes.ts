import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { AccountComponent } from './components/account/account/account.component';
import { AddComponent } from './components/add/add/add.component';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},  
    {path: '', redirectTo: 'home', pathMatch: 'full'}, 
    {path: 'account', component: AccountComponent},
    {path: 'add', component:AddComponent},  
    {path: '**', component:NotFoundComponent}   


];
