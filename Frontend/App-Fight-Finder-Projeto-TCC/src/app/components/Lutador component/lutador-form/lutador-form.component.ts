import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Lutador } from '../../interfaces/Lutador';
import { LutadorService } from '../../../servicos/lutador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lutador-form',
  templateUrl: './lutador-form.component.html',
  styleUrl: './lutador-form.component.css'
})
export class LutadorFormComponent {
  inserir: any;
  exibirFormulario: string | undefined;



  @Input() lutador: Lutador | null = null; 

  @Output() salvar: EventEmitter<any> = new EventEmitter<any>(); 
@Output() editar: EventEmitter<any> = new EventEmitter<any>(); 


constructor(
  private lutadorService: LutadorService, 
  private router: Router
){}
 

lutadorEditado!: Lutador; 
limparLutador():void {
  this.lutadorEditado={
    id: 0,
    nome: '',
    idade: 0,
    isColorida: false,
    modalidade: '',
    altura: -1,
    peso: 0,
    genero: '',
    ativo: false,
    foto: '', 
    vitorias: 0,
    derrotas: 0, 
    empates: 0, 
    turma: '',  
    observacoes: '', 
    comentarios: []
  }
}


ngOnChanges(): void{
  if (this.lutador !=null ){
  
    this.lutadorEditado={
      id: this.lutador.id,
      nome: this.lutador.nome,
      idade: this.lutador.idade,
      modalidade: this.lutador.modalidade,
      isColorida: this.lutador.isColorida,
      genero: this.lutador.genero,
      peso: this.lutador.peso,
      altura: this.lutador.altura,
      ativo: this.lutador.ativo,
      foto: this.lutador.foto   ,
      vitorias:this.lutador.vitorias,
      derrotas:this.lutador.derrotas,
      empates:this.lutador.empates,
      turma:this.lutador.turma,
      observacoes:this.lutador.observacoes,
      comentarios:this.lutador.comentarios,
    }; 
    console.log(this.lutador.foto);
  } else {
    this.limparLutador(); 
  }
  }

  ngOnInit():void{ 
    this.limparLutador();
    }

salvarDados(): void{
  this.lutadorService.add(this.lutadorEditado).subscribe(() => {
    this.router.navigate(['/menuInicial']);
  });
}


cancelar(): void {
  this.limparLutador();
}


novoLutador(novoLutador: Lutador): void {
  this.exibirFormulario='novo';
  
}


} 