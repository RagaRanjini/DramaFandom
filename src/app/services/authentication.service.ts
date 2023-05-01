import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  httpOptions:any;
  status:boolean=false;
  constructor(private http:HttpClient) { }
  loginstatus():boolean{
    return this.status;
  }
  getUsersList():Observable<any>{
    return this.http.get("http://localhost:4500/UserData")
  }
  //To post user data while signing up...
  newuser(data:any):Observable<any>{
    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
    return this.http.post("http://localhost:4500/UserData",data,this.httpOptions);
  }
}
