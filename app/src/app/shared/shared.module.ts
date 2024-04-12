import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { TranslateModule } from '@ngx-translate/core';  
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
// import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CustomRegisterModule } from './module/custom-registry.module';
// import { AgGridModule } from 'ag-grid-angular';


const module = [
  CommonModule, 
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule,
  // TranslateModule,
  // AgGridModule,
  MatSnackBarModule,
  MatSortModule,
  MatProgressSpinnerModule,
  CustomRegisterModule
]

const component = [
 SignupComponent,
 LoginComponent
]

// const services = [
  // CandeactivateService,
  // RolesService
// ]

@NgModule({
  declarations: [ ...component ],
//   exports : [ ...module, ...component, ...services],
//   imports: [ ...module ],
//   providers : [...services ]
})
export class SharedModule { }
