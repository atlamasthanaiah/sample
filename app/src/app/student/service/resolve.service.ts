import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Resolve,RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResolveService {

  constructor(private http:HttpClient) { }

  resolve():Observable<any>{
    return this.http.get('../../../assets/json/scroll.json')
  }
}
