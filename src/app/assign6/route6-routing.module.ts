import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteSixComponent } from './route-six.component';

const routes: Routes = [{ path: '', component: RouteSixComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Route6RoutingModule {}
