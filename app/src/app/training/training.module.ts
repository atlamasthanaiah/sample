import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeditationComponent } from './meditation/meditation.component';
import { InternshipComponent } from './internship/internship.component';
import { TrainingRoutingModule } from './training-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MeditationComponent,
    InternshipComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    SharedModule
  ]
})
export class TrainingModule { }
