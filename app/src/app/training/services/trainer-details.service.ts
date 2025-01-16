import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainerDetailsService {

  constructor(private http: HttpClient) { }
  private baseUrl = environment.MAIN_API_URL;    // this is real time (it means api calling different environments)
  
  trainerDetails() {
    return this.http.get('../../../assets/json/trainerDetails.json')

  }
   /* this is reall time api calling  */
   projectDetails() {
    const endPoint = 'API_CONST.ALL-PROJECT'
    return this.http.get(`${this.baseUrl}/${endPoint}`)
  }
}
