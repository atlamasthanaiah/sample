import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable,throwError  } from 'rxjs';
import { NotificationService } from '../../shared/service/notification.service';
import { Message } from '../../shared/const/global/app.const';

@Injectable()
export class GlobalerrorInterceptor implements HttpInterceptor {

  constructor( private notify: NotificationService ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let userFriendlyMessage = Message.EERROR_KEY;  // default fallback

        // Client-side error
        if (error.error instanceof ErrorEvent) {
          userFriendlyMessage = `Client Error: ${error.error.message}`;
        } 
        // Server-side error
        else {
          switch (error.status) {
            case 0:
              userFriendlyMessage = Message.SERVER_UNREACHABLE;
              break;
            case 401:
              userFriendlyMessage = Message.LOGIN_ERROR_KEY;
              break;
            case 403:
              userFriendlyMessage = Message.ACCESS_DENIED;
              break;
            case 404:
              userFriendlyMessage = Message.RESOURCE_NOT_FOUND;
              break;
            case 500:
              userFriendlyMessage = Message.INTERNAL_SERVER_ERROR;
              break;
            default:
              userFriendlyMessage = `Error ${error.status}: ${error.message}`;
          }
        }
        // Show global error message via NotificationService
        this.notify.openSnackBar(userFriendlyMessage, 'error');

        return throwError(() => error);
      })
    );
  }
}
