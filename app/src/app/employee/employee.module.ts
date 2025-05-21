import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptableComponent } from './emptable/emptable.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { MatIconModule } from '@angular/material/icon';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalerrorInterceptor } from './services/globalerror.interceptor';
// import { EmpPipe } from './emp.pipe';

const components = [
  EmptableComponent,
  AddemployeeComponent,
  // EmpPipe
]

const imports = [
  CommonModule,
  EmployeeRoutingModule,
  SharedModule
]

@NgModule({
  declarations: [ ...components, ],
  imports: [ ...imports ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalerrorInterceptor,
      multi: true
    }
  ]
  // providers: [ ...providers ]
})
export class EmployeeModule { }
