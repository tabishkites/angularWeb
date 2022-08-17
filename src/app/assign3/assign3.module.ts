import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteThreeComponent } from './inputOutput/route-three.component';
import { CountDisplayComponent } from './inputOutput/count-display/count-display.component';
import { TimerlimitComponent } from './inputOutput/timerlimit/timerlimit.component';
import { StartpausecountComponent } from './inputOutput/startpausecount/startpausecount.component';
import { DatePipe } from '@angular/common';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { Route3RoutingModule } from './route3-routing.module';

@NgModule({
  declarations: [
    RouteThreeComponent,
    CountDisplayComponent,
    TimerlimitComponent,
    StartpausecountComponent,
  ],
  imports: [CommonModule, FormsModule, Route3RoutingModule],
  providers: [UserService, DatePipe],
})
export class Assign3Module {}
