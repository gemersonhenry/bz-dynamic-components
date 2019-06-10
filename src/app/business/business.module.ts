import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { BusinessRoutingModule } from './business-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    BusinessRoutingModule,
  ],
})
export class BusinessModule { }
