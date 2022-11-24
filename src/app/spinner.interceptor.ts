import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { delay, Observable, tap } from 'rxjs';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    alert('Show loading');


    return next.handle(request).pipe(
      delay(1000),
      tap(() => {
        alert('Hide Loading')
      })
    );
  }
}
