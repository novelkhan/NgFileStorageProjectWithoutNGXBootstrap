import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConfirmEmailComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    SendEmailComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
