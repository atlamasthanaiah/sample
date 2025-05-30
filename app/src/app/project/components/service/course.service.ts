import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = environment.MAIN_API_URL;    // this is real time (it means api calling different environments)

  private apiUrl = 'assets/json';   //this is just code simplyfy this is also correct but in realtime need to use above structure.

  constructor(private http: HttpClient) { }

  getEmpInfo() {
    return this.http.get('../../../assets/json/virtualScroll.json')

  }

  getCountries() {
    return this.http.get('../../../assets/json/countries.json')

  }

  getAllCourse() {
    return this.http.get('../../../assets/json/course.json')

  }

  // getSList() {
  //   return this.http.get('../../../assets/json/stdList.json')
  // }

  /* this is reall time api calling  */
  /*  */
  
  getSList() {
    return this.http.get<any>(`${this.apiUrl}/stdList.json`);
  }

  /* this is reall time api calling  */
  projectDetails() {
    const endPoint = 'API_CONST.ALL-PROJECT'
    return this.http.get(`${this.baseUrl}/${endPoint}`)
  }

}
