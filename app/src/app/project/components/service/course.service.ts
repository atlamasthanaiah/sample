import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor( private http:HttpClient) { }

  getEmpInfo(){
    return this.http.get('../../../assets/json/virtualScroll.json')  
    
  }

  getCountries(){
    return this.http.get('../../../assets/json/countries.json')  
    
  }

  getAllCourse(){
    return this.http.get('../../../assets/json/course.json')  
    
  }
  getSList(){
    return this.http.get('../../../assets/json/stdList.json')
  }

  //   loginDetails(){
  //     return this.http.get('../../../assets/json/login.json')
  //   }
  
}
