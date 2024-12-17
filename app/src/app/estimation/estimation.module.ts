import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimationRoutingModule } from './estimation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { N2estimationComponent } from './n2estimation/n2estimation.component';
import { N3estimationComponent } from './n3estimation/n3estimation.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatefieldComponent } from './datefield/datefield.component';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { DateService } from '../shared/service/date.service';

@NgModule({
  declarations: [
    N2estimationComponent,
    N3estimationComponent,
    DatefieldComponent,
  ],

  imports: [
    CommonModule,
    EstimationRoutingModule,
    SharedModule,
    MatDatepickerModule
  ],

  providers: [
    { provide: DateAdapter, useClass: DateService },
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: { dateInput: 'dd-MM-yyyy' },
        display: { dateInput: 'dd-MM-yyyy', monthYearLabel: 'MMM yyyy', dateA11yLabel: 'LL', monthYearA11yLabel: 'MMMM yyyy' },
      },
    },
  ],
})

export class EstimationModule { }
