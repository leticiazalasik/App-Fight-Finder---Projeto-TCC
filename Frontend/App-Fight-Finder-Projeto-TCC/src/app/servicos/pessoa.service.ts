import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pessoa } from "../components/interfaces/Pessoa";

@Injectable({
    providedIn: 'root'
  })
  export class PessoaService {
  
    private apiUrl = 'http://localhost:8080/pessoa';
  
    constructor(private http:HttpClient) { }
  
    findAll(): Observable<Pessoa[]>{
      return this.http.get<Pessoa[]>(this.apiUrl); 
    }
  findById(id:number): Observable<Pessoa>{
    return this.http.get<Pessoa>(`${this.apiUrl}/${id}`);  
  }
  add(pessoa:Pessoa):Observable<Pessoa>{
    return this.http.post<Pessoa>(this.apiUrl, pessoa);
  }
  
  update(pessoa: Pessoa): Observable<Pessoa>{
    return this.http.put<Pessoa>(`${this.apiUrl}/${pessoa.nome}`, pessoa);
  
  }
  
  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`); 
  }
    
  }