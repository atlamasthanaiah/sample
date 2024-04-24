import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const EmployeeRoutes: Routes = [
    
];

@NgModule({
  imports: [RouterModule.forChild(EmployeeRoutes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }