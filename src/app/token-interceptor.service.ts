
import { Injectable,Injector} from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {LoglistService} from './loglist.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req,next){
    let authservice = this.injector.get(LoglistService)
    let tokenizedreq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${authservice.gettoken()}`
      }
    })
    return next.handle(tokenizedreq)
  }
}