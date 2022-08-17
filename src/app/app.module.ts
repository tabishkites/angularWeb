import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputoutputModule } from './inputoutput/inputoutput.module';
import { AccountInfoModule } from './account-info/account-info.module';
import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';
import { Assign7Module } from './assign7/assign7.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputoutputModule,
    AccountInfoModule,
    Assign7Module,
  ],
  providers: [UserService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
