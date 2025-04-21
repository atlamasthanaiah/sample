import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StdregistrationComponent } from './stdregistration/stdregistration.component';
import { StdlistComponent } from './stdlist/stdlist.component';
import { PreventDataLoosingGuard } from '../shared/service/prevent-data-loosing.guard';

const studentRoutes: Routes = [
  {
    path: 'stdregistration', component: StdregistrationComponent,
    canDeactivate: [PreventDataLoosingGuard]
  },
  // {
  //   path: 'stdregistration/edit/:id', component: StdregistrationComponent,
  //   canDeactivate: [PreventDataLoosingGuard]
  // },

  { path: 'stdlist', component: StdlistComponent },
  {
    path: '',
    redirectTo: 'stdlist',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(studentRoutes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }