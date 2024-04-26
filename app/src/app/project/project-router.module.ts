import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const projectRoutes: Routes = [
    
];

@NgModule({
  imports: [RouterModule.forChild(projectRoutes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
