import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StdregistrationComponent } from './stdregistration/stdregistration.component';
import { StdlistComponent } from './stdlist/stdlist.component';

const studentRoutes: Routes = [
   { path:'stdregistration', component:StdregistrationComponent },
   { path:'stdlist', component: StdlistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(studentRoutes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }