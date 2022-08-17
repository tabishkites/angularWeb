import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-route-three',
  templateUrl: './route-three.component.html',
})
export class RouteThreeComponent implements OnInit {
  timestamps: string = '';
  pauseStartCount: { scount: number; pcount: number } = {
    scount: 0,
    pcount: 0,
  };
  countLimit: { count: number; type: string } = {
    count: 0,
    type: 'start',
  };
  pausedCount: string = '';
  constructor(public datepipe: DatePipe) {}
  ngOnInit(): void {}
  GetLimit(data: any) {
    this.countLimit.count = data.count;
    this.countLimit.type = data.type;
    this.countLimit = { ...this.countLimit };
    if (data.type == 'start') {
      this.timestamps += `\n Started at ${this.datepipe.transform(
        new Date(),
        'MM-d-y h:mm:ss a'
      )}`;
      this.pauseStartCount = {
        scount: this.pauseStartCount.scount + 1,
        pcount: this.pauseStartCount.pcount,
      };
    } else {
      this.timestamps += `\n Paused at ${this.datepipe.transform(
        new Date(),
        'MM-d-y h:mm:ss a'
      )}`;
      this.pauseStartCount = {
        scount: this.pauseStartCount.scount,
        pcount: this.pauseStartCount.pcount + 1,
      };
    }
  }
  GetTriggerEvent(data: any) {
    this.pausedCount += `\n Paused at ${data.count}`;
  }
}
