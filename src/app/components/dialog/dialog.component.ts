import {
  Component, OnInit, AfterViewInit, OnDestroy, Type
} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, AfterViewInit, OnDestroy {

  public childComponentType: Type<any>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {

  }

  onOverlayClicked(evt: MouseEvent) {
    // close the dialog
    console.log('onOverlayClicked: ', evt);
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }
}
