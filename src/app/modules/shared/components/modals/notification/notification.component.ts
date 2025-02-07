import { Component, Input, AfterViewInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements AfterViewInit {
  @Input() isSuccess: boolean = true;
  @Input() title: string = '';
  @Input() message: string = '';

  ngAfterViewInit() {
    this.show();
  }

  show() {
    const modalElement = document.getElementById('notificationModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modalElement.addEventListener('shown.bs.modal', () => {
        (document.getElementById('notificationModal') as HTMLElement).focus();
      });
      modal.show();
    }
  }

  hide() {
    const modalElement = document.getElementById('notificationModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
  }
}