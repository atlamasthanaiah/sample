import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CourseService } from '../../project/services/course.service';
import { Router } from '@angular/router';
import { Student } from '../model/studet.model';

@Component({
  selector: 'atla-stdlist',
  templateUrl: './stdlist.component.html',
  styleUrls: ['./stdlist.component.scss']
})
export class StdlistComponent implements OnInit {
  displayedColumns_parent: string[] = ['firstName', 'lastName', 'email', 'phone', 'country', 'actions'];
  dataSource_parent = new MatTableDataSource<Student>([]);
  isLoading = false;

  constructor(
    private SList: CourseService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.loadStudentData();
  }

  loadStudentData(): void {
    this.isLoading = true;
    this.SList.getSList().subscribe({
      next: (response: any) => {
        const studentArray = response?.studentList || [];
        console.log('Received student data:', studentArray);
        if (Array.isArray(studentArray)) {
          this.dataSource_parent = new MatTableDataSource<Student>(studentArray);
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading student data:', error);
        this.isLoading = false;
      }
    });
  }

  // editData(row: any): void {
  //   const student = row as Student;
  //   if (student?.id) {
  //     this.route.navigate(['/student/edit', student.id]);
  //   } else {
  //     console.error('Missing student ID:', row);
  //   }
  // }

  editStudent(): void {
    this.route.navigate(['/student/stdregistration']);
  }
}
