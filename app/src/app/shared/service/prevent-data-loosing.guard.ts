import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class PreventDataLoosingGuard implements CanActivate,CanDeactivate<CanComponentDeactivate> {

    private baseUrl = environment.MAIN_API_URL;    // this is real time (it means api calling different environments)
  
    constructor(private http:HttpClient){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

   /* to prevent the data loosing  */
  canDeactivate(component: CanComponentDeactivate): boolean | Observable<boolean> {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
  
  /* this is reall time api calling  */
  projectDetails() {
    const endPoint = 'API_CONST.ALL-PROJECT'
    return this.http.get(`${this.baseUrl}/${endPoint}`)
  }
  
}
