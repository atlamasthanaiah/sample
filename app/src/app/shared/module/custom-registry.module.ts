import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { ScrollingModule } from '@angular/cdk/scrolling'; //need to remove
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DateService } from '../service/date.service';
// import { MatTableModule } from '@angular/material/table';
// import { MatTableDataSource } from '@angular/material/table';
import { MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';

const _module = [ CommonModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
//   TableVirtualScrollModule,
  ScrollingModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  // MatTableModule,
  // MatTableDataSource
  MatDatepickerModule,
  MatNativeDateModule,
]
const _providers = [ 
  // {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  DateService
]

@NgModule({
  declarations: [  ],
  imports: [ ..._module ],
  providers : [ ..._providers],
  exports: [ ..._module ]
})
export class CustomRegisterModule { }
