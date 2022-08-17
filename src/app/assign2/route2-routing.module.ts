import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteTwoComponent } from './gridList/route-two.component';

const routes: Routes = [{ path: '', component: RouteTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Route2RoutingModule {}
