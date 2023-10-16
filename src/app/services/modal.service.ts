import { Injectable, ApplicationRef } from '@angular/core';
import { BaseModalComponent } from '../components/base-modal/base-modal.component';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalComponent: BaseModalComponent;

  constructor(
    private appRef: ApplicationRef
  ) {
    this.appendBaseModalToRoot();
  }

  appendBaseModalToRoot() {
    const rootViewRef = (this.appRef.components[0].instance as AppComponent).viewContainerRef;    
    this.modalComponent = rootViewRef.createComponent(BaseModalComponent).instance;
  }

  open(component: any, input: any) {
    this.modalComponent.content.clear();

    const createdComponent = this.modalComponent.content.createComponent(component);
    Object.keys(input).forEach(key => {
      (createdComponent.instance as any)[key] = input[key];
    });
    
    this.modalComponent.open();
  }
}
