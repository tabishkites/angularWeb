import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timerlimit',
  templateUrl: './timerlimit.component.html',
})
export class TimerlimitComponent implements OnInit {
  constructor() {}
  @Input() countPause: string;
  @Output() limitTrack = new EventEmitter<{ count: number; type: string }>();
  ngOnInit(): void {}
  interval: any;
  type: string = '';
  limit: number = 0;
  startPauseCounter(val: number) {
    if (val == 1 && this.type != 'start') {
      this.type = 'start';
      this.limitTrack.emit({ count: this.limit, type: 'start' });
    } else if (val == 2 && this.type != 'stop') {
      this.type = 'stop';
      this.limitTrack.emit({ count: this.limit, type: 'pause' });
    }
  }
}
