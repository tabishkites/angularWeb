import { Identifiers } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-route-five',
  templateUrl: './route-five.component.html',
})
export class RouteFiveComponent implements OnInit {
  constructor(private userService: UserService) {}
  sortedColumn: string;
  direction: string = 'asc';
  students: any[];
  studentFormat: any = {
    Id: 0,
    Name: 0,
    Class: 0,
    Section: 0,
    Sub1: 0,
    Sub2: 0,
    Sub3: 0,
  };
  ngOnInit(): void {
    this.userService.getJSON().subscribe((data) => {
      this.students = data.Students;
    });
  }
  sortHeader(key: string) {
    this.sortedColumn = key;
    this.direction =
      this.studentFormat[key] % 3 != 0
        ? this.direction == 'asc'
          ? 'desc'
          : 'asc'
        : this.direction;
    this.studentFormat[key] += 1;
    let adjust = 1;
    if (this.direction === 'desc') {
      adjust = -1;
    }
    if (this.studentFormat[key] % 3 == 0) {
      this.userService.getJSON().subscribe((data) => {
        this.students = data.Students;
      });
    } else {
      this.students.sort((a, b) => {
        if (a[this.sortedColumn] > b[this.sortedColumn]) {
          return adjust * 1;
        } else if (a[this.sortedColumn] < b[this.sortedColumn]) {
          return adjust * -1;
        } else {
          return 0;
        }
      });
    }
  }
}
