import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Treinador } from "../components/interfaces/Treinador";

@Injectable({
    providedIn: 'root'
  })
  export class TreinadorService {
  
    private apiUrl = 'http://localhost:8080/treinador';
  
    constructor(private http:HttpClient) { }
  
    findAll(): Observable<Treinador[]>{
      return this.http.get<Treinador[]>(this.apiUrl); 
    }
  findById(id:number): Observable<Treinador>{
    return this.http.get<Treinador>(`$(this.apiUrl)/${id}`); 
  }
  add(treinador:Treinador):Observable<Treinador>{
    return this.http.post<Treinador>(`${this.apiUrl}/create`, treinador);
  }
  
  update(treinador: Treinador): Observable<Treinador>{
    return this.http.put<Treinador>(`${this.apiUrl}/${treinador.id}`, treinador);
  
  }
  
  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`); 
  }
    
  }