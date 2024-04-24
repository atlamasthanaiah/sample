import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const estimationRoutes: Routes = [
    
];

@NgModule({
  imports: [RouterModule.forChild(estimationRoutes)],
  exports: [RouterModule]
})
export class EstimationRoutingModule { }