import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { ValidationMessagesComponent } from './components/errors/validation-messages/validation-messages.component';
import { NotificationComponent } from './components/modals/notification/notification.component';
import { UserHasRoleDirective } from './directives/user-has-role.directive';



@NgModule({
  declarations: [
    NotFoundComponent,
    ValidationMessagesComponent,
    NotificationComponent,
    UserHasRoleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ValidationMessagesComponent, // Export the component here
    UserHasRoleDirective // Export the directive so it can be used in other modules
  ]
})
export class SharedModule { }
