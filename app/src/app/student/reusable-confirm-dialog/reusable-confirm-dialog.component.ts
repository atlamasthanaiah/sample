import { Component, OnInit,Inject  } from '@angular/core';
import { StdregistrationComponent } from '../stdregistration/stdregistration.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'atla-reusable-confirm-dialog',
  templateUrl: './reusable-confirm-dialog.component.html',
  styleUrls: ['./reusable-confirm-dialog.component.scss']
})
export class ReusableConfirmDialogComponent implements OnInit {

  title: string = 'Confirm';
  message: string = 'Are you sure?';
  confirmText: string = 'Yes';
  cancelText: string = 'No';

  // constructor(public dialogRef: MatDialogRef<StdregistrationComponent>) { }

  constructor(
    public dialogRef: MatDialogRef<ReusableConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
  }

}
