import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleButtonComponent } from './atoms/simple-button/simple-button.component';
import { AlertMessageComponent } from './atoms/alert-message/alert-message.component';

@NgModule({
  declarations: [
    SimpleButtonComponent,
    AlertMessageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SimpleButtonComponent,
  ],
  entryComponents: [
    AlertMessageComponent,
  ]
})
export class AtomicModule { }
