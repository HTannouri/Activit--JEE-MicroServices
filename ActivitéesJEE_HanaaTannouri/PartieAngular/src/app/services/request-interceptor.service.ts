import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { KeycloakSecurityService } from 'src/app/services/keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor{

  constructor(private kcSecurity: KeycloakSecurityService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('http interceptor');
    if(!this.kcSecurity.kc.authenticated) return next.handle(req);
    let request = req.clone({
      setHeaders: {
        Authorization: 'Bearer '+ this.kcSecurity.kc.token,
      }
    });
    return next.handle(request);
  }

}
