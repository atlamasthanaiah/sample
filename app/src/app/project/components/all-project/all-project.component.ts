import { Component, OnInit, ViewChild} from '@angular/core';

import { CourseService } from '../service/course.service';
import { CourseDetails } from '../model/courseDetails.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'atla-all-project',
  templateUrl: './all-project.component.html',
  styleUrls: ['./all-project.component.scss']
})
export class AllProjectComponent implements OnInit{

  public course:CourseDetails;
  displayedColumns : string[]= ['id','Name','Course Start Date','Course End Date','Duration'];
  dataSource : MatTableDataSource<CourseDetails>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private CD:CourseService){}

  ngOnInit(): void {
    this.CD.getAllCourse().subscribe({
      next:((response:CourseDetails)=>{
       this.dataSource = response.courseDetails[0];
      })
    })
  }
}
