import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { N2estimationComponent } from './n2estimation/n2estimation.component';
import { N3estimationComponent } from './n3estimation/n3estimation.component';

const estimationRoutes: Routes = [
  { path: 'n2estimation', component: N2estimationComponent },
  { path: 'n3estmation', component: N3estimationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(estimationRoutes)],
  exports: [RouterModule]
})
export class EstimationRoutingModule { }