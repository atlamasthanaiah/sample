import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable,map } from 'rxjs';
import { RoleService } from 'src/app/shared/service/role.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanLoad  {

  constructor(private roleService: RoleService, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    const username = 'jane_user'; // Replace with dynamic username from auth 
    //  use this "john_admin".  we can navigate to estimation module
    // || for static checking we need
    // to change the username. the username is added in role json file (for checking purpose we need change the username)
    return this.roleService.getUserRole(username).pipe(
      map((role) => {
        const requiredRoles = route.data?.['roles'] as string[];
        if (requiredRoles && requiredRoles.includes(role)) {
          return true;
        } else {
          this.router.navigate(['/access-denied']);
          return false;
        }
      })
    );
  }
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  
}
