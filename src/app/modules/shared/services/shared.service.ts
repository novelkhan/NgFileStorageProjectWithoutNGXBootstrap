// shared.service.ts
import { Injectable, ApplicationRef, ComponentRef, Injector } from '@angular/core';
import { NotificationComponent } from '../components/modals/notification/notification.component';
import { ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private viewContainerRef!: ViewContainerRef;  // Definite assignment assertion

  constructor(private appRef: ApplicationRef, private injector: Injector) {}

  setViewContainerRef(vcr: ViewContainerRef) {
    this.viewContainerRef = vcr;
  }

  showNotification(isSuccess: boolean, title: string, message: string) {
    const componentRef: ComponentRef<NotificationComponent> = this.viewContainerRef.createComponent(NotificationComponent);

    componentRef.instance.isSuccess = isSuccess;
    componentRef.instance.title = title;
    componentRef.instance.message = message;
    componentRef.instance.closeModal.subscribe(() => {
      componentRef.destroy();
    });

    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }
}