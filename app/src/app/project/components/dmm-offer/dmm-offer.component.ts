import { AfterViewInit, Component,OnInit,ViewChild, } from '@angular/core';
import { CourseService } from '../service/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// import {MatSort, Sort, } from '@angular/material/sort';
// import { MatSort,Sort } from '@angular/material/sort';
import {Sort,MatSort, MatSortModule, MatSortable} from '@angular/material/sort';
import { Student } from '../../../student/model/studet.model';
// import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'atla-dmm-offer',
  templateUrl: './dmm-offer.component.html',
  styleUrls: ['./dmm-offer.component.scss']
})
export class DmmOfferComponent implements OnInit {

  displayedColumns : string[]= ['FirstName','LastName','Email','Phone','Country','Action']
  isLoading = false;
  // pagination
  dataSource : MatTableDataSource<Student>;
  @ViewChild( MatPaginator ) paginator: MatPaginator;
  @ViewChild( MatSort ) matsort: MatSort;

  // totalRecords: number = 0;
  // pageSize: number = 5;

  constructor( private SList:CourseService, 
    private route: Router ,
    private AC:ActivatedRoute,
   ){}

  ngOnInit(): void {
    this.SList.getSList().subscribe({
      next:((response:Student) =>{
        this.dataSource = response.studentList
        // below code for pagination in angullar material
        this.dataSource = new MatTableDataSource(response.studentList)
        this.dataSource.paginator = this.paginator;
        // spinner
        this.isLoading = false;
        // sorting
        this.dataSource.sort = this.matsort;
        this.matsort.sort(({}) as unknown as MatSortable);
        
      })
    })
//     this.isLoading = true; 
// this.SList.getSList().subscribe({
//   next: ((response: Student) => {
//     this.dataSource = response.studentList;
//     this.dataSource = new MatTableDataSource(response.studentList)
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.matsort;
//     this.isLoading = false;
//   }),
//   error: error => {
//     console.error('Error fetching data:', error);
//     this.isLoading = true;
//   }
// });

  }

  searchData(e:any){
    this.dataSource.filter = e.target.value;
  }

  
}
