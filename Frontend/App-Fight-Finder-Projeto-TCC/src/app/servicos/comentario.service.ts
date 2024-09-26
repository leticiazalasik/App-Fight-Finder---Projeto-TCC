import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Comentario } from "../components/interfaces/Comentario";

@Injectable({
    providedIn: 'root'
  })
  export class ComentarioService {
  
    private apiUrl = 'http://localhost:8080/comentario';
  
    constructor(private http:HttpClient) { }
  
    findAll(): Observable<Comentario[]>{
      return this.http.get<Comentario[]>(this.apiUrl); 
    }
  findById(id:number): Observable<Comentario>{
    return this.http.get<Comentario>(`$(this.apiUrl)/${id}`); 
  }
  add(comentario:Comentario):Observable<Comentario>{
    return this.http.post<Comentario>(`${this.apiUrl}/create`, comentario);
  }
  
  update(comentario: Comentario): Observable<Comentario>{
    return this.http.put<Comentario>(`${this.apiUrl}/${comentario.id}`, comentario);
  
  }
  
  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`); 
  }
    
  }