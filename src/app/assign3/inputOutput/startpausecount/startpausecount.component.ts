import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-startpausecount',
  templateUrl: './startpausecount.component.html',
})
export class StartpausecountComponent implements OnInit {
  constructor() {}
  @Input() pauseStartCount: { scount: number; pcount: number } = {
    scount: 0,
    pcount: 0,
  };

  ngOnInit(): void {}
}
