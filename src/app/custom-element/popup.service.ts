import { Injectable, Injector, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { PopupComponent } from './popup/popup.component';

@Injectable()
export class PopupService {

  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }


  showAsComponent(message: string) {
    const popup = document.createElement('popup-component');
    const factory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
    const popupComponentRef = factory.create(this.injector, [], popup);
    this.applicationRef.attachView(popupComponentRef.hostView);
    // 监听关闭popup事件
    popupComponentRef.instance.closed.subscribe(() => {
      document.body.removeChild(popup);
      this.applicationRef.detachView(popupComponentRef.hostView);
    });
    // set message
    popupComponentRef.instance.message = message;
    // add to dom
    document.body.appendChild(popup);
  }

  showAsElement(message: string) {
    // create Element
    const popupEl = document.createElement('popup-element');
    // add Listener
    popupEl.addEventListener('closed', () => {
      document.body.removeChild(popupEl);
    })
    // popupEl.message = message;
    // add to the dom
    document.body.appendChild(popupEl);
  }

}
