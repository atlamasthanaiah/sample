import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesPath } from './shared/const/routing/router-path.const';
import { HomeComponent } from './home/home/home.component';
// import { LoginComponent } from './home/login/login.component';

const routes: Routes = [

  { path:'',component:HomeComponent },
  // { path:'',component:LoginComponent },
  {
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    path:RoutesPath.Home.base.path
  },

  {
    loadChildren: () => import('./student/student.module').then(m=>m.StudentModule),
    path:RoutesPath.student.base.path
  },

  {
    loadChildren: () => import('./estimation/estimation.module').then(m=>m.EstimationModule),
    path:RoutesPath.estimation.base.path
  },

  {
    loadChildren: () => import('./hr/hr.module').then(m=>m.HrModule),
    path:RoutesPath.HRDetail.base.path
  },

  {
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
    path:RoutesPath.employee.base.path
  },

  {
    loadChildren: () => import('./training/training.module').then(m => m.TrainingModule),
    path: RoutesPath.traingDetails.base.path
  },

  {
    loadChildren: () => import('./project/project.module').then(m => m.ProjectModule),
    path: RoutesPath.sideNav.base.path
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
