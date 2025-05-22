import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TrainerDetailsService } from '../../training/services/trainer-details.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TrainerDetails } from '../../training/models/trainer-details';
import { MatSort } from '@angular/material/sort';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { Message } from 'src/app/shared/const/global/app.const';

@Component({
  selector: 'atla-trainer-details',
  templateUrl: './trainer-details.component.html',
  styleUrls: ['./trainer-details.component.scss'],
})
export class TrainerDetailsComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<TrainerDetails>;
  displayedColumns: string[] = [];
  currentRole: 'admin' | 'user' = 'user';

  // Role-based column visibility
  rolesConfig = {
    admin: ['name', 'phone', 'qualificaation', 'experience', 'salary'],
    user: ['name', 'phone', 'qualificaation', 'experience'],
  };

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matsort: MatSort;

  constructor( private tds: TrainerDetailsService, private notification:NotificationService ) {}

  ngOnInit(): void {
    this.setDisplayedColumns();
    this.loadingTrainerDetails();
  }

  ngAfterViewInit(): void {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matsort;
    }
  }

  setDisplayedColumns() {
    this.displayedColumns = this.rolesConfig[this.currentRole];
  }

  loadingTrainerDetails() {
    this.tds.trainerDetails().subscribe({
      next: (response: TrainerDetails[]) => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.matsort;
        this.notification.openSnackBar(Message.SUCCESS, 'success')
      },
      error: (error) => {
        console.error('Error loading trainer details:', error);
        this.notification.openSnackBar('Invalid data format', 'error');
      },
    });
  }
}
