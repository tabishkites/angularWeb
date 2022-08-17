import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
})
export class Comp2Component implements OnInit {
  constructor(private userService: UserService, public datepipe: DatePipe) {}
  limit: number = 0;
  countPause: string = '';
  scount: number = 0;
  pcount: number = 0;
  type: string = '';

  ngOnInit(): void {}
  resetCounter() {
    this.limit = 0;
    this.countPause = '';
    this.userService.currentVal = 0;
    this.userService.countLimit.next({ count: this.limit, type: 'pause' });
    this.userService.pauseStartCount.next({
      scount: 0,
      pcount: 0,
    });
    this.pcount = 0;
    this.scount = 0;
    this.userService.countState.next('');
  }
  startPauseCounter(val: number) {
    if (val == 1 && this.type != 'start') {
      this.type = 'start';
      this.userService.countLimit.next({ count: this.limit, type: 'start' });
      this.userService.countState.next(
        `\n Started on ${this.datepipe.transform(
          new Date(),
          'MM-d-y h:mm:ss a'
        )}`
      );
      this.scount = this.scount + 1;
      this.userService.pauseStartCount.next({
        scount: this.scount,
        pcount: this.pcount,
      });
    } else if (val == 2 && this.type != 'stop') {
      this.type = 'stop';
      this.userService.countLimit.next({ count: this.limit, type: 'pause' });
      this.userService.countState.next(
        `\n Paused on ${this.datepipe.transform(
          new Date(),
          'MM-d-y h:mm:ss a'
        )}`
      );
      this.pcount = this.pcount + 1;
      this.userService.pauseStartCount.next({
        scount: this.scount,
        pcount: this.pcount,
      });

      if (this.userService.currentVal > 0)
        this.countPause += `\n Paused on ${this.userService.currentVal}`;
    }
  }
}
