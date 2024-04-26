import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const trainingRoutes: Routes = [
    
];

@NgModule({
  imports: [RouterModule.forChild(trainingRoutes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }