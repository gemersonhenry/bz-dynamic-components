import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomicModule } from '../atomic/atomic.module';
import { DialogModule } from './dialog/dialog.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AtomicModule,
    DialogModule,
  ]
})
export class ComponentsModule { }
