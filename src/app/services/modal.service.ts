import { Injectable, ApplicationRef } from '@angular/core';
import { ModalWrapperComponent } from '../components/modal-wrapper/modal-wrapper.component';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalComponent: ModalWrapperComponent;

  constructor(
    private appRef: ApplicationRef
  ) {
    this.appendBaseModalToRoot();
  }

  appendBaseModalToRoot() {
    const rootViewRef = (this.appRef.components[0].instance as AppComponent).viewContainerRef;    
    this.modalComponent = rootViewRef.createComponent(ModalWrapperComponent).instance;
  }

  async open(component: any, input: any) {

    if (this.modalComponent.isOpen) {
      this.modalComponent.saveAndClose();

      await new Promise(resolve => setTimeout(resolve, 120));
    }

    this.modalComponent.content.clear();

    const createdComponent = this.modalComponent.content.createComponent(component);
    Object.keys(input).forEach(key => {
      (createdComponent.instance as any)[key] = input[key];
    });
    
    this.modalComponent.open();
  }

  close() {
    this.modalComponent.saveAndClose();
  }
}
