import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {
    router.events.subscribe((url: any) => console.log(url));
    // console.log(this.router.url);
    // router.events.forEach((event) => {
    //   if (event instanceof NavigationStart) {
    //     if (event['url'] == '/login') {
    //       this.showHead = false;
    //     } else {
    //       // console.log("NU")
    //       this.showHead = true;
    //     }
    //   }
    // });
  }
  name = 'tabish';
  employees = [{ name: 'tabish', address: 'delhi' }];
  showHead: boolean = true;
  accounts = [
    {
      name: 'Dev',
      status: 'active',
    },
    {
      name: 'staging',
      status: 'inactive',
    },
    {
      name: 'preProd',
      status: 'hidden',
    },
  ];
  onCreateAccount(account: { name: string; status: string }) {
    this.accounts.push(account);
  }
}
