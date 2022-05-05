import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // return next.handle(request);

    console.log("message from http interceptor");
 
    const hardcodedToken = '1d38d128-0671-4121-8084-f6332a992a40-test-security token';
    //  const hardcodedToken = sessionStorage.getItem("AUTH_TOKEN");
 
    // Generated modifed request object
    let updatedReq:HttpRequest<any> = request.clone({
     setHeaders: {
         Authorization: `Bearer ${hardcodedToken}`
     }
    });
    return next.handle(updatedReq)
    .pipe(
      // Retry on failure,  2 ---  two times
      retry(2),
 
      // Handle errors
      catchError((error: HttpErrorResponse) => {
        // TODO: Add error handling logic here
       // alert(`HTTP Error: ${req.url}`);
        console.log(`Error Message from HTTP Interceptor : ${request.url}, StatusCode : ${error.status} `);
 
       if(error.status === 404)
       {
         console.log("The requested resource could not be found");
       }
       else
       {
         console.log(error.message);
       }
 
 
        return throwError(error);
      })
    );
  }
}
