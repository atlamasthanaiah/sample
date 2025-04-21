import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentRoutingModule } from './student-router.module';
import { StdregistrationComponent } from './stdregistration/stdregistration.component';
import { StdlistComponent } from './stdlist/stdlist.component';
// import { ReusableConfirmDialogComponent } from '../student/reusable-confirm-dialog/reusable-confirm-dialog.component';
import { ReusableConfirmDialogComponent } from './reusable-confirm-dialog/reusable-confirm-dialog.component';
import { ConfirmationService } from './service/confirmation.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

const components = [ 
    StdregistrationComponent,
    StdlistComponent,
    ReusableConfirmDialogComponent
]

const imports = [ 
  CommonModule,
  StudentRoutingModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule ,
  ReactiveFormsModule,
  SharedModule,
  MatDialogModule,
   MatButtonModule
]

const providers = [ ConfirmationService ]

@NgModule({
  // exports : [],
  declarations: [ ...components],
  imports: [ ...imports ],
  providers: [ ...providers ]
})
export class StudentModule { }
