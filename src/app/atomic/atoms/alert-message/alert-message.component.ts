import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertMessageComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _message: string;

  @Input() set message(message: string) {
    this._message = message;
    this.changeDetectorRef.detectChanges();
  }

  get message() {
    return this._message;
  }

  @Output()
  closeEvent: EventEmitter<{}> = new EventEmitter();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    console.log('AlertMessageComponent => constructor');
  }

  ngOnInit() {
  }

}
