import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptableComponent } from './emptable/emptable.component';

const EmployeeRoutes: Routes = [
    { path:'emptable',component:EmptableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(EmployeeRoutes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }