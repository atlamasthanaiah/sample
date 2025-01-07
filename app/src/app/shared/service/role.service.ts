import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private roleUrl = 'assets/json/roles.json';
  private baseUrl = environment.MAIN_API_URL;    // this is real time (it means api calling different environments)

  constructor(private http: HttpClient) { }

  getUserRole(username: string): Observable<string> {
    return this.http.get<any>(this.roleUrl).pipe(
      map((data) =>
        data.users.find((user: any) => user.username === username)?.role
      )
    );
  }

  /* this is reall time api calling  */
  projectDetails() {
    const endPoint = 'API_CONST.ALL-PROJECT'
    return this.http.get(`${this.baseUrl}/${endPoint}`)
  }
}
