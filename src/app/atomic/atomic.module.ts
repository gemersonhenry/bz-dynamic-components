import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleButtonComponent } from './atoms/simple-button/simple-button.component';

@NgModule({
  declarations: [
    SimpleButtonComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AtomicModule { }
