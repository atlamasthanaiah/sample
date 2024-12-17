import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../../employee/model/employeeData.model';
import { Router } from '@angular/router';

@Component({
  selector: 'atla-emptable',
  templateUrl: './emptable.component.html',
  styleUrls: ['./emptable.component.scss']
})
export class EmptableComponent implements OnInit {

  constructor( private empservice : EmployeeService, private router: Router) { }
 
  data: Employee[] = [];

  ngOnInit(): void {
    this.empservice.getAalldata().subscribe( res=>
      this.data = res.employee
    )
  }

  navigations( link : string ){
    this.router.navigate([link])
  }
}
