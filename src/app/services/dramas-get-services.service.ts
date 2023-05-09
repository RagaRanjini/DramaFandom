import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DramasGetServicesService {

  constructor(private http:HttpClient) {}
    getLatestBuzz():Observable<any>{
      return this.http.get("http://localhost:4500/latestBuzz");
    }
    getDramas():Observable<any>{
      return this.http.get("http://localhost:4500/Dramas")
    }
    getView(id:any):Observable<any>{
      return this.http.get("http://localhost:4500/Dramas/"+id)
    }
    getLatestBuzzbyId(id:number):Observable<any>{
      return this.http.get("http://localhost:4500/latestBuzz/"+id)
    }
    getChats():Observable<any>{
      return this.http.get("http://localhost:4500/Chats");
    }
    getSlides():Observable<any>{
      return this.http.get("http://localhost:4500/slideshow")
    }
}
