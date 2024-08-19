import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'atla-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {

  empForm : FormGroup

  constructor( private fb: FormBuilder, private empService: EmployeeService) { }

  ngOnInit(): void {

    this.empForm = this.fb.group({
      id : [],
      name : [],
      salary : [],
      exp : []
    })
  }

  createForm(){
    // this.empService.addData().subscribe()
  }
}
