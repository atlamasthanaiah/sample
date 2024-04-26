import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptableComponent } from './emptable/emptable.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EmptableComponent
  ],

  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule
  ]
})
export class EmployeeModule { }
