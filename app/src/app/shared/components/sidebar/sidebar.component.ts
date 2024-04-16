import { Component,ViewChild } from '@angular/core';
import { SidenavRoutes, appWorkSpaceRoutes } from './sidebar.const';
// import { MatSidenav } from '@angular/material/sidenav';
// import { Observable } from 'rxjs';

@Component({
  selector: 'atla-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  
  appWorkSpaceRoutes: SidenavRoutes[] = appWorkSpaceRoutes;
  // checking toggle for sidenav
  expanded: boolean = true;
  isShowing = false;
  // @ViewChild('sidenav') sidenav: MatSidenav;

  // additionally adding data
  // public sidenaveState$ : Observable<any>;
  // public sidbaropen : boolean;

  // navbarOpen():void{
  //   this.sidbaropen ;{(this.sidbaropen=true)} ; 
  // }

  // navbarClose():void{
  //   this.sidbaropen ;{(this.sidbaropen=false)}
  // }
}
