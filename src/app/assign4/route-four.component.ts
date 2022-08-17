import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-route-four',
  templateUrl: './route-four.component.html',
})
export class RouteFourComponent implements OnInit {
  constructor(private userService: UserService) {
    this.userService.countState.subscribe((val) => {
      if (val == '') {
        this.timestamps = '';
      } else {
        this.timestamps += val;
      }
    });
  }
  timestamps: string = '';

  ngOnInit(): void {}
}
