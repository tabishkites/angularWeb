import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route1Component } from './float/route1.component';
import { Route1RoutingModule } from './route1-routing.module';
@NgModule({
  declarations: [Route1Component],
  imports: [CommonModule, Route1RoutingModule],
})
export class Assign1Module {}
