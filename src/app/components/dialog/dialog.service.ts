import {
  Injectable, ComponentRef, ComponentFactoryResolver,
  ApplicationRef, Injector,
} from '@angular/core';

import { DialogComponent } from './dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  public dialogComponentRef: ComponentRef<DialogComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
  ) { }

  appendDialogComponentToBody() {
    console.log('appendDialogComponentToBody');
  }
}
