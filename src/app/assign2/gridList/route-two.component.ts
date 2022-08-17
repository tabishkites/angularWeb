import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import DivsData from 'src/assets/gridData.json';

@Component({
  selector: 'app-route-two',
  templateUrl: './route-two.component.html',
})
export class RouteTwoComponent implements OnInit {
  constructor() {}
  containerDiv = new Array(10);
  boxDiv = new Array(4);
  data: any[];
  isList: Boolean = false;
  sortItem: number = 0;
  selectedLayout: number = 0;
  layoutView = 'layout-parent-grid';
  ngOnInit(): void {
    this.data = DivsData.Divs;
  }

  getLayout(value: number) {
    this.selectedLayout = value;
    if (value == 2) {
      this.isList = true;
      this.layoutView = 'layout-parent-list';
    } else {
      this.isList = false;
      this.layoutView = 'layout-parent-grid';
    }
  }
  sortMethod(newValue: string) {
    let adjust: number = ['2', '3'].includes(newValue) ? -1 : 1;
    let column: string = ['1', '2'].includes(newValue) ? 'price' : 'views';
    this.data.sort((a, b) => {
      if (a[column] > b[column]) {
        return adjust * 1;
      } else if (a[column] < b[column]) {
        return adjust * -1;
      } else {
        return 0;
      }
    });
  }
}
