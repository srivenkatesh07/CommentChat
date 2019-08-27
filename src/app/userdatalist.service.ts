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

    return this.httpclient.post('api/commentlist',data,{headers:new HttpHeaders().append('Content-Type','application/json')}).pipe(map(res => res));
  }
  likeupdate(data:any){
    return this.httpclient.put('api/likeupdate',data,{headers:new HttpHeaders().append('Content-Type','application/json')}).pipe(map(res => res));
  }
  sublikeupdate(data:any){
    return this.httpclient.put('api/sublikeupdate',data,{headers:new HttpHeaders().append('Content-Type','application/json')}).pipe(map(res => res));
  }

  commentupdate(data:any){
    return this.httpclient.put('api/commentupdate',data,{headers:new HttpHeaders().append('Content-Type','application/json')}).pipe(map(res => res));
  }
  
  getcurrentuser(data:any){

    return this.httpclient.post('api/getcurrentuser',data,{headers:new HttpHeaders().append('Content-Type','application/json')}).pipe(map(res => res));
  }

  usercommentDisplay(){
    return this.httpclient.get('api/commentlists',{headers:new HttpHeaders().append('Content-Type','application/json')}).pipe(map(res => res));
  }

  subusercommentDisplay(){
    return this.httpclient.get('api/subcommentlists',{headers:new HttpHeaders().append('Content-Type','application/json')}).pipe(map(res => res));
  }

  subcommentdata(data:any){

    return this.httpclient.post('api/subcommentlist',data,{headers:new HttpHeaders().append('Content-Type','application/json')}).pipe(map(res => res));
  }


}
