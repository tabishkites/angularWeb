import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'route1',
    loadChildren: () =>
      import('./assign1/assign1.module').then((mod) => mod.Assign1Module),
  },
  {
    path: 'route2',
    loadChildren: () =>
      import('./assign2/assign2.module').then((mod) => mod.Assign2Module),
  },
  {
    path: 'route3',
    loadChildren: () =>
      import('./assign3/assign3.module').then((mod) => mod.Assign3Module),
  },
  {
    path: 'route4',
    loadChildren: () =>
      import('./assign4/assign4.module').then((mod) => mod.Assign4Module),
  },
  {
    path: 'route5',
    loadChildren: () =>
      import('./assign5/assign5.module').then((mod) => mod.Assign5Module),
  },
  {
    path: '',
    loadChildren: () =>
      import('./assign1/assign1.module').then((mod) => mod.Assign1Module),
  },
  {
    path: 'route6',
    loadChildren: () =>
      import('./assign6/assign6.module').then((mod) => mod.Assign6Module),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./assign7/assign7.module').then((mod) => mod.Assign7Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
