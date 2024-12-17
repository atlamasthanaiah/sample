import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const hrRoutes: Routes = [
    
];

@NgModule({
  imports: [RouterModule.forChild(hrRoutes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }