import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, catchError, throwError} from 'rxjs';
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
  postingDrama(data:any):Observable<any>{
    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
    return this.hp.post("http://localhost:4500/Dramas",data,this.httpOptions);
  }
  postingKDrama(data:any):Observable<any>{
    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
    return this.hp.post("http://localhost:4500/KoreanTitles",data,this.httpOptions).pipe(
      catchError(error => {
        console.log("Error occurred while posting Korean drama title:", error);
        return throwError(error);
      }));
  }
  postingCDrama(data:any):Observable<any>{
    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
    return this.hp.post("http://localhost:4500/ChineseTitles",data,this.httpOptions);
  }
  postingJDrama(data:any):Observable<any>{
    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
    return this.hp.post("http://localhost:4500/JapaneseTitles",data,this.httpOptions);
  }
  postingBuzz(data:any):Observable<any>{
    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
    return this.hp.post("http://localhost:4500/latestBuzz",data,this.httpOptions);
  }
}
