import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-count-display',
  templateUrl: './count-display.component.html',
})
export class CountDisplayComponent implements OnInit, OnChanges {
  constructor() {}
  interval: any;
  currentVal: number = 0;
  @Output() limitPausedStart = new EventEmitter<{
    count: number;
    type: string;
  }>();
  @Input() countInterval: { count: number; type: string };
  ngOnChanges(changes: SimpleChanges) {
    if (changes.countInterval.previousValue != undefined) {
      if (changes.countInterval.currentValue.type == 'pause') {
        this.pauseInterval();
        this.limitPausedStart.emit({ count: this.currentVal, type: 'pause' });
      } else {
        clearInterval(this.interval);
        if (this.currentVal > 0) {
          this.countInterval.count = this.currentVal;
          this.countInterval = { ...this.countInterval };
        }
        this.interval = setInterval(() => {
          this.countInterval.count--;
          this.currentVal = this.countInterval.count;
        }, 1000);
      }
    }
  }

  ngOnInit() {
    this.startInterval();
  }
  startInterval() {
    this.interval = setInterval(() => {
      this.countInterval.count--;
      if (this.countInterval.count > 0) {
        this.currentVal = this.countInterval.count;
      }
    }, 1000);
  }
  pauseInterval() {
    clearInterval(this.interval);
    this.countInterval.count = this.currentVal;
    this.countInterval = { ...this.countInterval };
  }
}
