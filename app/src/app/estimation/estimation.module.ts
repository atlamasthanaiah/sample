import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimationRoutingModule } from './estimation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { N2estimationComponent } from './n2estimation/n2estimation.component';
import { N3estimationComponent } from './n3estimation/n3estimation.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatefieldComponent } from './datefield/datefield.component';


@NgModule({
  declarations: [
    N2estimationComponent,
    N3estimationComponent,
    DatefieldComponent
  ],

  imports: [
    CommonModule,
    EstimationRoutingModule,
    SharedModule,
    MatDatepickerModule
  ]
})

export class EstimationModule { }
