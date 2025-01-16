import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeditationComponent } from './meditation/meditation.component';
import { InternshipComponent } from './internship/internship.component';
import { TrainingRoutingModule } from './training-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TrainerDetailsComponent } from './trainer-details/trainer-details.component';
import { MatTableModule } from '@angular/material/table' 

@NgModule({
  declarations: [
    MeditationComponent,
    InternshipComponent,
    TrainerDetailsComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    SharedModule,
    MatTableModule
  ]
})
export class TrainingModule { }
