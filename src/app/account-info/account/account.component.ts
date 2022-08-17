import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string, status: string };
  constructor() { }

  ngOnInit(): void {
  }
}
