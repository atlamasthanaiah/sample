import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core'; 
// import { TranslateModule } from '@ngx-translate/core';  
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
// import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CustomRegisterModule } from './module/custom-registry.module';
import { NavComponent } from './components/nav/nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReusableDataTableComponent } from './components/reusable-data-table/reusable-data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReusableSearhComponent } from './components/reusable-searh/reusable-searh.component';

//  import { EmpPipe } from '../employee/emp.pipe';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { AgGridModule } from 'ag-grid-angular';


const module = [
  CommonModule, 
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule,
  TranslateModule,
  // FlexLayoutModule,
  MatSnackBarModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatIconModule,
  MatProgressSpinnerModule ,
  CustomRegisterModule
]

const component = [
 SignupComponent,
 LoginComponent,
 NavComponent,
 SidebarComponent,
 SpinnerComponent,
 AccessDeniedComponent,
 PageNotFoundComponent,
 ReusableDataTableComponent,
 ReusableSearhComponent
//  EmpPipe
]

// const services = [
  // CandeactivateService,
  // RolesService
// ]

@NgModule({
  declarations: [ ...component ],
  exports : [ ...module, ...component],
  imports: [ ...module ],
//   providers : [...services ]
})
export class SharedModule { }
