import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostServicesService {

  constructor(private hp:HttpClient) { }
  httpOptions:any;
  postingReview(data:any):Observable<any>{
    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
    return this.hp.post("http://localhost:4500/Reviews",data,this.httpOptions);
  }
  gettingReview():Observable<any>{
    return this.hp.get("http://localhost:4500/Reviews");
  }
}
