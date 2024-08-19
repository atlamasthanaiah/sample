import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employeeData.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http : HttpClient) { }

  getAalldata(){
    return this.http.get<{ employee: any[] }>('../../../assets/json/employee.json')
  }

  addData(data:Employee){
    return this.http.post('../../../assets/json/employee.json',data)
  }
}
