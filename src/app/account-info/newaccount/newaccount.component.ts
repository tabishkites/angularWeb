import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html'
})
export class NewaccountComponent implements OnInit {
  @Output() accountInfo = new EventEmitter<{ name: string, status: string }>()
  constructor() { }

  ngOnInit(): void {
  }
  createAccount(accountName: string, status: string) {
    this.accountInfo.emit({
      name: accountName,
      status: status
    });
  }

}
