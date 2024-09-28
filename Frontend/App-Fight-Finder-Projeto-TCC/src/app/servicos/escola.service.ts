import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Escola } from "../components/interfaces/Escola";

@Injectable({
    providedIn: 'root'
  })
  export class EscolaService {
  
    private apiUrl = 'http://localhost:8080/escola';
  
    constructor(private http:HttpClient) { }
  
    findAll(): Observable<Escola[]>{
      return this.http.get<Escola[]>(this.apiUrl); 
    }
  findById(id:number): Observable<Escola>{
    return this.http.get<Escola>(`${this.apiUrl}/${id}`); 
  }
  add(escola:Escola):Observable<Escola>{
    return this.http.post<Escola>(this.apiUrl, escola);
  }
  
  update(escola: Escola): Observable<Escola>{
    return this.http.put<Escola>(`${this.apiUrl}/${escola.id}`, escola);
  
  }
  
  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`); 
  }
    
  }