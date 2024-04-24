import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesPath } from './shared/const/routing/router-path.const';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [

  { path:'',component:HomeComponent },
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
