import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoglistService {

  constructor(private httpclient:HttpClient,private router:Router) { }

  login(body:any){
    return this.httpclient.post('http://localhost:3000/api/login',body,{headers:new HttpHeaders().append('Content-Type','application/json')}).pipe(map(res => res));
  }

  signup(body:any){
  
    return this.httpclient.post('http://localhost:3000/api/signup',body,{headers:new HttpHeaders().append('Content-Type','application/json')}).pipe(map(res => res));

  }

  loggedin(){
    return !!localStorage.getItem('token');
  }

  logoutuser(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
  
  gettoken(){
    return localStorage.getItem('token')
  }

}
