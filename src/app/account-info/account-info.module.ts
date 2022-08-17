import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { NewaccountComponent } from './newaccount/newaccount.component';



@NgModule({
  declarations: [
    AccountComponent,
    NewaccountComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccountComponent,
    NewaccountComponent
  ]
})
export class AccountInfoModule { }
