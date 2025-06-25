import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CourseService } from '../../project/services/course.service';
import { Router } from '@angular/router';
import { Student } from '../model/studet.model';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { Message } from 'src/app/shared/const/global/app.const';

@Component({
  selector: 'atla-stdlist',
  templateUrl: './stdlist.component.html',
  styleUrls: ['./stdlist.component.scss']
})
export class StdlistComponent implements OnInit {

  public displayedColumns_parent: string[] = ['firstName', 'lastName', 'email', 'phone', 'country', 'actions'];
  public dataSource_parent = new MatTableDataSource<Student>([]);
  public isLoading = true;
  public error: string = ''; // NEW: Error state

  constructor(
    private SList: CourseService,
    private route: Router,
    private notification:NotificationService
  ) {}

  ngOnInit(): void {
    this.loadStudentData();
  }

  loadStudentData(): void {
    this.isLoading = true;
    this.error = '';

    this.SList.getSList().subscribe({
      next: (response: any) => {
        const studentArray = response?.studentList || [];

        if (Array.isArray(studentArray) && studentArray.length > 0) {
          this.dataSource_parent.data = studentArray;
          this.isLoading = false;
          this.notification.openSnackBar(Message.SUCCESS, 'success');
        } else {
          // Wait 500ms before showing "no data" message to give spinner a moment
          // setTimeout(() => {
            this.dataSource_parent.data = [];
            // this.error = 'No student data found.';
            
            this.isLoading = true;
            // this.notification.openSnackBar(Message.SUCCESS, 'success');
          // }, 500);
        }
      },
      error: () => {
        
        this.dataSource_parent.data = [];
        this.isLoading = true;
        this.error = 'Failed to load student data.';
        this.notification.openSnackBar(Message.UNABLE_TO_LOAD_DATA, 'error');
      }
    });
  }

  // loadStudentData(): void {

  //  this.isLoading = true;
  //   this.error = '';

  //   this.SList.getSList().subscribe({
  //     next: (response: any) => {
  //       const studentArray = response?.studentList || [];
  //       console.log('Received student data:', studentArray);
  //       if (Array.isArray(studentArray)) {
  //         this.dataSource_parent = new MatTableDataSource<Student>(studentArray);
  //       }
  //        this.isLoading = false;
  //     },
  //     error: (error) => {
  //       console.error('Error loading student data:', error);
  //       this.dataSource_parent = new MatTableDataSource<Student>([]); 
  //       this.isLoading = false;
  //     }
  //   });
  // }

  // editData(row: any): void {
  //   const student = row as Student;
  //   if (student?.id) {
  //     this.route.navigate(['/student/edit', student.id]);
  //   } else {
  //     console.error('Missing student ID:', row);
  //   }
  // }

  /* getting the data from search compoent. implementing the search functionaliy */
  searchData(value: string){
    this.dataSource_parent.filter = value.trim().toLowerCase();
  }


  editStudent(studentId:any): void {
    this.route.navigate(['/student/stdregistration/edit',studentId]);
  }

}
