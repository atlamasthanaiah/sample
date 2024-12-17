import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../model/employeeData.model';
import { Router } from '@angular/router';

@Component({
  selector: 'atla-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {

  empForm : FormGroup

  constructor( private fb: FormBuilder, private empService: EmployeeService, private router:Router) { }

  ngOnInit(): void {

   
  }

  crateData(){
    this.empForm = this.fb.group({
      id : [],
      name : [],
      salary : [],
      exp : []
    })
  }

  formData : Employee ={
    id : "",
      name : '',
      gender : '',
      salary : "",
      exp : ""
  }
  createForm(){
    this.empService.addData(this.formData).subscribe({
      next : (data) =>{
        this.router.navigate(['/employee/emptable'])
      }
    })
  }
}
