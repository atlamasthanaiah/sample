import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesPath } from './shared/const/routing/router-path.const';

const routes: Routes = [
  {
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    path:RoutesPath.Home.base.path
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
