import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-router.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule
  ]
})

export class ProjectModule { }
