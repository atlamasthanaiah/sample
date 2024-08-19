import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptableComponent } from './emptable/emptable.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

const EmployeeRoutes: Routes = [
    { path :'emptable', component : EmptableComponent },
    { path :'addemployee', component : AddemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(EmployeeRoutes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }