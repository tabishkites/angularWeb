import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
})
export class Comp3Component implements OnInit {
  constructor(private userService: UserService) {
    this.userService.pauseStartCount.subscribe((counter) => {
      this.scount = counter.scount;
      this.pcount = counter.pcount;
    });
  }
  scount: number = 0;
  pcount: number = 0;

  ngOnInit(): void {}
}
