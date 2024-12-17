import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private roleUrl = 'assets/json/roles.json';
  constructor(private http: HttpClient) {}

  getUserRole(username: string): Observable<string> {
    return this.http.get<any>(this.roleUrl).pipe(
      map((data) =>
        data.users.find((user: any) => user.username === username)?.role
      )
    );
  }
}
