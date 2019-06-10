import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss']
})
export class SimpleButtonComponent implements OnInit {

  @Input()
  buttonText = 'Enviar';

  @Input()
  buttonType = 'primary';

  @Output()
  buttonClickEvent: EventEmitter<{}> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get buttonTypeClass() {
    return {
      'bz-btn--primary': this.buttonType === 'primary',
      'bz-btn--secondary': this.buttonType === 'secondary',
      'bz-btn--primary-outline': this.buttonType === 'primary-outline',
    };
  }

  public clickEvent() {
    this.buttonClickEvent.emit({});
  }

}
