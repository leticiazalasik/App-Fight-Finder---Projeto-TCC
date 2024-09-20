import { Component, Input } from '@angular/core';
import { Escola } from '../../interfaces/Escola';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrl: './tela-login.component.css'
})
export class TelaLoginComponent {

  @Input() escola: Escola | null = null; 

escolaEditada!:Escola; 

limparEscola():void {
this.escolaEditada={
  id:0,
  nome: ' ', 
  email:' ', 
  senha:' ', 
  foto:' ', 
  alunos:' ', 
  aulas:0,
}

}

ngOnChanges(): void{
  if (this.escola !=null ){
  
  this.escolaEditada={

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

