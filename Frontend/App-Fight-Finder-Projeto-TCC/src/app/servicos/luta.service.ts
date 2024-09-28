import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Luta } from "../components/interfaces/Luta";

@Injectable({
    providedIn: 'root'
  })
  export class LutaService {
  
    private apiUrl = 'http://localhost:8080/luta';
  
    constructor(private http:HttpClient) { }
  
    findAll(): Observable<Luta[]>{
      return this.http.get<Luta[]>(this.apiUrl); 
    }
  findById(id:number): Observable<Luta>{
    return this.http.get<Luta>(`${this.apiUrl}/${id}`); 
  }
  add(luta:Luta):Observable<Luta>{
    return this.http.post<Luta>(`${this.apiUrl}/create`, luta);
  }
  
  update(luta: Luta): Observable<Luta>{
    return this.http.put<Luta>(`${this.apiUrl}/${luta.id}`, luta);
  
  }
  
  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`); 
  }
    
  }