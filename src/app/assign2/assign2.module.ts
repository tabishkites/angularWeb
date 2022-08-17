import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouteTwoComponent } from './gridList/route-two.component';
import { Route2RoutingModule } from './route2-routing.module';

@NgModule({
  declarations: [RouteTwoComponent],
  imports: [CommonModule, FormsModule, Route2RoutingModule],
})
export class Assign2Module {}
