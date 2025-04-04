import { Component, OnInit, Input, ContentChild, TemplateRef,ViewChild, AfterViewInit  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'atla-reusable-data-table',
  templateUrl: './reusable-data-table.component.html',
  styleUrls: ['./reusable-data-table.component.scss']
})
export class ReusableDataTableComponent implements OnInit {

  @Input() displayedColumns: string[] = [];
  @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @ContentChild('actionTemplate') actionTemplate!: TemplateRef<any>;
  //ContentChild:  Use to get the first element or the directive matching the selector from the content DOM. 
  // If the content DOM changes, and a new child matches the selector, the property will be updated.
  // Content queries are set before the ngAfterContentInit callback is called.

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
