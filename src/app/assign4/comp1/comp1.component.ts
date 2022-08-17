import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
})
export class Comp1Component implements OnInit {
  constructor(private userService: UserService) {
    this.userService.countLimit.subscribe((count) => {
      if (count.type == 'pause') {
        this.pauseInterval();
      } else {
        clearInterval(this.interval);
        if (this.userService.currentVal > 0) {
          this.countInterval = this.userService.currentVal;
        } else {
          this.countInterval = count.count;
        }
        this.interval = setInterval(() => {
          this.countInterval--;
          this.userService.currentVal = this.countInterval;
        }, 1000);
      }
    });
  }
  countInterval: number = 0;
  interval: any;
  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.countInterval--;
      if (this.countInterval > 0) {
        this.userService.currentVal = this.countInterval;
      }
    }, 1000);
  }

  pauseInterval() {
    clearInterval(this.interval);
    this.countInterval = this.userService.currentVal;
  }
}
