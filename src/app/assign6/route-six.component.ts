import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-route-six',
  templateUrl: './route-six.component.html',
})
export class RouteSixComponent implements OnInit {
  constructor() {}
  containers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  addNewDivs = [1, 2, 3, 4, 5];
  ngOnInit(): void {}
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    var st = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    if (
      st &&
      st + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight
    ) {
      this.containers = this.containers.concat(this.addNewDivs);
    }
  }
  showDiv(val: number) {
    alert(`Button  in ${val}th div  clicked`);
  }
}
