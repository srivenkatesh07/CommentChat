import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserdatalistService {

  constructor(private httpclient:HttpClient,private router:Router) { }

  commentdata(data:any){

    return this.httpclient.post('http://localhost:3000/api/commentlist',data,{headers:new HttpHeaders().append('Content-Type','application/json')}).pipe(map(res => res));
  }
  likeupdate(data:any){
    return this.httpclient.put('http://localhost:3000/api/likeupdate',data,{headers:new HttpHeaders().append('Content-Type','application/json')}).pipe(map(res => res));
  }
  sublikeupdate(data:any){
    return this.httpclient.put('http://localhost:3000/api/sublikeupdate',data,{headers:new HttpHeaders().append('Content-Type','application/json')}).pipe(map(res => res));
  }

  commentupdate(data:any){
    return this.httpclient.put('http://localhost:3000/api/commentupdate',data,{headers:new HttpHeaders().append('Content-Type','application/json')}).pipe(map(res => res));
  }
  
  getcurrentuser(data:any){

    return this.httpclient.post('http://localhost:3000/api/getcurrentuser',data,{headers:new HttpHeaders().append('Content-Type','application/json')}).pipe(map(res => res));
  }

  usercommentDisplay(){
    return this.httpclient.get('http://localhost:3000/api/commentlists',{headers:new HttpHeaders().append('Content-Type','application/json')}).pipe(map(res => res));
  }

  subusercommentDisplay(){
    return this.httpclient.get('http://localhost:3000/api/subcommentlists',{headers:new HttpHeaders().append('Content-Type','application/json')}).pipe(map(res => res));
  }

  subcommentdata(data:any){

    return this.httpclient.post('http://localhost:3000/api/subcommentlist',data,{headers:new HttpHeaders().append('Content-Type','application/json')}).pipe(map(res => res));
  }


}
