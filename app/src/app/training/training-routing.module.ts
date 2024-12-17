import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeditationComponent } from './meditation/meditation.component';
import { InternshipComponent } from './internship/internship.component';

const trainingRoutes: Routes = [
  { path: 'meditation', component: MeditationComponent },
  { path: 'internship', component: InternshipComponent }
];

@NgModule({
  imports: [RouterModule.forChild(trainingRoutes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }