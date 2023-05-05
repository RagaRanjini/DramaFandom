import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditingService {

  constructor(private http:HttpClient) { }
  editingDrama(id:number,data:any):Observable<any>{
    return this.http.put("http://localhost:4500/Dramas/"+id,data);
  }
  editingBuzz(id:number,data:any):Observable<any>{
    return this.http.put("http://localhost:4500/latestBuzz/"+id,data)
  }
}
