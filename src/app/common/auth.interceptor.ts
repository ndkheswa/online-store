import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const idToken = localStorage.getItem("currentUser");
    const getJwt = JSON.parse(idToken).idToken



    if (idToken) {
        const cloned = request.clone({
            headers: request.headers.set("Authorization",
                "Bearer " + getJwt.jwtToken)
                .set("Content-Type", "application/json")
        });

        return next.handle(cloned);
    }
    else {
        return next.handle(request);
    }

  }
}
