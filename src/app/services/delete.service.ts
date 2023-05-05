import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient) { }
  deleteDrama(id:number):Observable<any>{
    return this.http.delete("http://localhost:4500/Dramas/"+id)
  }
  deleteBuzz(id:number):Observable<any>{
    return this.http.delete("http://localhost:4500/latestBuzz/"+id)
  }
}
