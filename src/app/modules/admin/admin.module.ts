import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddEditMemberComponent } from './components/add-edit-member/add-edit-member.component';
import { AdminComponent } from './components/admin.component';


@NgModule({
  declarations: [
    AddEditMemberComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
