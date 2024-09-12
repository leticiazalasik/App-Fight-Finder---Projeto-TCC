import { Component, Inject, Injectable, Input } from '@angular/core';
import { Escola } from '../../interfaces/Escola';


@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrl: './escola.component.css'
})

export class EscolaComponent {

 @Input() escola!: Escola; 

 id:number=1; 
  nome: string = 'Alves e Valindolfo'; 
  email:string='AV@gmail.com'; 
  senha: string ='abacaxi';
  foto: string = 'ajajaja'; 
  treinadores:string = 'jojo, juju, jiji';  
  alunos: string ='Maria, Joaninha, José';  
  aulas: number =2;  


}



