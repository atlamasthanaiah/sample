import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'atla-reusable-data-table',
  templateUrl: './reusable-data-table.component.html',
  styleUrls: ['./reusable-data-table.component.scss']
})
export class ReusableDataTableComponent implements OnInit {

  @Input() displayedColumns: string[] = [];
  @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor() {}

  ngOnInit(): void {}
}
