import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AtomicModule } from 'src/app/atomic/atomic.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AtomicModule,
    HomeRoutingModule,
  ],
})
export class HomeModule { }
