import { Component, Input } from '@angular/core';
import { Escola } from '../escola/escola.component';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrl: './tela-login.component.css'
})
export class TelaLoginComponent {

  @Input() escola: Escola | null = null; 

escolaLogin!:Escola; 

limparEscola():void {
this.escolaLogin={
  id:0,
  nome: ' ', 
  email:' ', 
  senha:' ', 
  foto:' ', 
  treinadores: ' ',
  alunos:' ', 
  aulas:0,
}

}

ngOnChanges(): void{
  if (this.escola !=null ){
  
  this.escolaLogin={

  id:this.escola.id, 
  nome: this.escola.nome,
  email: this.escola.email,
  senha: this.escola.senha,
  foto: this.escola.foto,
  treinadores: this.escola.treinadores,
  alunos: this.escola.alunos,
  aulas:this.escola.aulas, 
    }; 
    console.log(this.escola.foto);
  } else {
    this.limparEscola(); 
  }
  }
       

}

