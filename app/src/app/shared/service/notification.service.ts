import { Injectable } from '@angular/core';
import { MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition ,MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  durationInSeconds = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, messageType: string) {
    this._snackBar.open(message, 'x', {
      duration : this.durationInSeconds,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: messageType
    });
  }
  
}
