import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../../employee/model/employeeData.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'atla-emptable',
  templateUrl: './emptable.component.html',
  styleUrls: ['./emptable.component.scss']
})
export class EmptableComponent implements OnInit {

  displayedColumns_parent: string[] = ['id', 'name', 'gender', 'exp', 'salary','actions'];
  dataSource_parent = new MatTableDataSource<Employee>();

  constructor(private empservice: EmployeeService) {}

  ngOnInit(): void {
    this.empservice.getAalldata().subscribe({
      next: (res) => {
        this.dataSource_parent.data = res.employee; // Ensure this returns an array
      },
      error: (err) => {
        console.error('Failed to load employee data', err);
      }
    });
  }

  // onEdit(emp: Employee) {
  //   this.router.navigate(['/employee/edit', emp.id]);
  // }
  
  // onDelete(emp: Employee) {
  //   if (confirm(`Delete ${emp.Name}?`)) {
  //     this.empservice.deleteEmployee(emp.id).subscribe(() => {
  //       this.dataSource.data = this.dataSource.data.filter(e => e.id !== emp.id);
  //     });
  //   }
  // }
}
