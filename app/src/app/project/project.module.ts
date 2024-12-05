import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-router.module';
import { SharedModule } from '../shared/shared.module';
import { AllProjectComponent } from './components/all-project/all-project.component';
import { ContactComponent } from './components/contact/contact.component';
import { CourseComponent } from './components/course/course.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { DmmOfferComponent } from './components/dmm-offer/dmm-offer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { CustomRegisterModule } from '../shared/module/custom-registry.module';
import { ContactDialogComponent } from './components/contact-dialog/contact-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


const _components = [
  AllProjectComponent,
  ContactComponent,
  CourseComponent,
  CreateProjectComponent,
  DmmOfferComponent,
  ContactDialogComponent
]

const _modules= [
  CommonModule,
  ProjectRoutingModule,
  SharedModule,
  FormsModule,
  ReactiveFormsModule,
  MatTableModule,
  MatSortModule,
  MatDialogModule,
  CustomRegisterModule
]

@NgModule({
  declarations: [ ..._components ],
  imports: [ ..._modules ]
 
})

export class ProjectModule { }
