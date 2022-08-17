import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {
  @Input() employee: { name: string; address: string; };
  constructor() { }

  ngOnInit(): void {
  }

}
