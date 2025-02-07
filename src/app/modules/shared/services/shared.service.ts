import { Injectable, ApplicationRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { NotificationComponent } from '../components/modals/notification/notification.component';
import * as bootstrap from 'bootstrap';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  showNotification(isSuccess: boolean, title: string, message: string) {
    // Create component
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NotificationComponent);
    const componentRef = componentFactory.create(this.injector);

    componentRef.instance.isSuccess = isSuccess;
    componentRef.instance.title = title;
    componentRef.instance.message = message;

    this.appRef.attachView(componentRef.hostView);

    // Append to DOM
    const domElem = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    // Show modal
    const modalElement = document.getElementById('notificationModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement, {
        backdrop: 'static',  // prevent closing the modal by clicking on the backdrop
        keyboard: false      // prevent closing the modal by pressing the ESC key
      });
      modal.show();

      modalElement.addEventListener('hidden.bs.modal', () => {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
      });
    }
  }
}
