import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Aula } from "../components/interfaces/Aula";

@Injectable({
    providedIn: 'root'
  })
  export class AulaService {
  
    private apiUrl = 'http://localhost:8080/aula';
  
    constructor(private http:HttpClient) { }
  
    findAll(): Observable<Aula[]>{
      return this.http.get<Aula[]>(this.apiUrl); 
    }
  findById(id:number): Observable<Aula>{
    return this.http.get<Aula>(`$(this.apiUrl)/${id}`); 
  }
  add(aula:Aula):Observable<Aula>{
    return this.http.post<Aula>(this.apiUrl, aula);
  }
  
  update(aula: Aula): Observable<Aula>{
    return this.http.put<Aula>(`${this.apiUrl}/${aula.id}`, aula);
  
  }
  
  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`); 
  }
    
  }