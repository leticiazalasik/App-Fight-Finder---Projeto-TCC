import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Lutador } from "../components/interfaces/Lutador";

@Injectable({
    providedIn: 'root'
  })
  export class LutadorService {
  
    private apiUrl = 'http://localhost:8080/lutador';
  
    constructor(private http:HttpClient) { }
  
    findAll(): Observable<Lutador[]>{
      return this.http.get<Lutador[]>(this.apiUrl); 
    }
  findById(id:number): Observable<Lutador>{
    return this.http.get<Lutador>(`$(this.apiUrl)/${id}`); 
  }
  add(lutador:Lutador):Observable<Lutador>{
    return this.http.post<Lutador>(this.apiUrl, lutador);
  }
  
  update(lutador: Lutador): Observable<Lutador>{
    return this.http.put<Lutador>(`${this.apiUrl}/${lutador.id}`, lutador);
  
  }
  
  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`); 
  }
    
  }