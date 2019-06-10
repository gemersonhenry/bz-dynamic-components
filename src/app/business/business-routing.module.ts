import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const ROUTES: Route[] = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    RouterModule,
  ]
})
export class BusinessRoutingModule {}