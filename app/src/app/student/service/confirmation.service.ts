import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ReusableConfirmDialogComponent } from '../reusable-confirm-dialog/reusable-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(private dialog: MatDialog) {}

  confirm(
    message: string,
    title: string = 'Confirm',
    confirmText: string = 'Yes',
    cancelText: string = 'No'
  ): Observable<boolean> {
    const dialogRef = this.dialog.open(ReusableConfirmDialogComponent, {
      width: '400px',
      data: { title, message, confirmText, cancelText },
    });

    return dialogRef.afterClosed();
  }
  // constructor() { }
}
