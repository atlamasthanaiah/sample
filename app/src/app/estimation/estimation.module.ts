import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimationRoutingModule } from './estimation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { N2estimationComponent } from './n2estimation/n2estimation.component';
import { N3estimationComponent } from './n3estimation/n3estimation.component';



@NgModule({
  declarations: [
    N2estimationComponent,
    N3estimationComponent
  ],

  imports: [
    CommonModule,
    EstimationRoutingModule,
    SharedModule
  ]
})

export class EstimationModule { }
