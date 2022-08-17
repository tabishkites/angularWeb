import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteFiveComponent } from './route-five.component';
import { UserService } from '../user.service';
import { Route5RoutingModule } from './route5-routing.module';

@NgModule({
  declarations: [RouteFiveComponent],
  imports: [CommonModule, Route5RoutingModule],
  providers: [UserService],
})
export class Assign5Module {}
