import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { RouteFourComponent } from './route-four.component';
import { DatePipe } from '@angular/common';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { Route4RoutingModule } from './route4-routing.module';

@NgModule({
  declarations: [
    Comp1Component,
    Comp2Component,
    Comp3Component,
    RouteFourComponent,
  ],
  imports: [CommonModule, FormsModule, Route4RoutingModule],
  providers: [UserService, DatePipe],
})
export class Assign4Module {}
