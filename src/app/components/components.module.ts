import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomicModule } from '../atomic/atomic.module';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    DialogComponent,
  ],
  imports: [
    CommonModule,
    AtomicModule,
  ]
})
export class ComponentsModule { }
