import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory, OnDestroy } from '@angular/core';
import { AlertMessageComponent } from 'src/app/atomic/atoms/alert-message/alert-message.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  public alertMessageRefs: ComponentRef<AlertMessageComponent>[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  private get alertMessageComponentFactory(): ComponentFactory<AlertMessageComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(AlertMessageComponent);
  }

  ngOnInit() {
    const { alertMessageComponentFactory } = this;
    const componentRef = this.container.createComponent(alertMessageComponentFactory);
    this.alertMessageRefs.push(componentRef);
    componentRef.instance.message = 'Nuevo mensage de alerta';
    setTimeout(() => {
      console.log('segunda actualización');
      componentRef.instance.message = 'Nuevo mensage de alerta 2';
    }, 5000);
  }

  ngOnDestroy() {
    this.alertMessageRefs.forEach((alertMessageRef) => {
      alertMessageRef.destroy();
    });
  }

  public addNewComponent() {
    console.log('addNewComponent');
    const { alertMessageComponentFactory } = this;
    const componentRef = this.container.createComponent(alertMessageComponentFactory);
    this.alertMessageRefs.push(componentRef);
    componentRef.instance.message = 'Nuevo mensage de alerta';
  }

  public printComponents() {
    console.log('printComponents');
    this.alertMessageRefs.forEach((alertMessage) => {
      console.log(alertMessage.instance);
    });
  }

  public clearContainer() {
    console.log('clearContainer');
    this.container.clear();
    this.alertMessageRefs = [];
  }

  public updateAlertMessageRefs() {
    this.alertMessageRefs.forEach((alertMessageRef) => {
      alertMessageRef.instance.message = 'Actualizando el mensaje';
    });
  }
}
