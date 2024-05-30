import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Lutador } from '../../interfaces/Lutador';


@Component({
  selector: 'app-lutador-form',
  templateUrl: './lutador-form.component.html',
  styleUrl: './lutador-form.component.css'
})
export class LutadorFormComponent {
  @Input() lutador: Lutador | null = null; 

  @Output() salvar: EventEmitter<any> = new EventEmitter<any>(); 
@Output() editar: EventEmitter<any> = new EventEmitter<any>(); 



lutadorEditado!: Lutador; 

ngOnChanges(): void{
if (this.lutador !=null ){

  this.lutadorEditado={
    id: this.lutador.id,
    nome: this.lutador.nome,
    idade: this.lutador.idade,
    modalidade: this.lutador.modalidade,
    nivel: this.lutador.nivel,
    genero: this.lutador.genero,
    peso: this.lutador.peso,
    altura: this.lutador.altura,
    ativo: this.lutador.ativo,
    foto: this.lutador.foto    
  }; 
} else {
  this.limparLutador(); 
}
}

ObterRadioSelecionado(): boolean{
  const radioSelecionado = document.querySelector('input[name="cadastro"]:checked')?.getAttribute('id');
if (radioSelecionado==='feminino'){
  return true; 
} else {
  return false; 
}
}

salvarDados(): void{
  this.lutadorEditado.ativo= this.ObterRadioSelecionado(); 
  this.salvar.emit(this.lutadorEditado);
}

cancelar(): void {
  this.limparLutador();
}

limparLutador():void {
  this.lutadorEditado={
    id: 0,
    nome: '',
    idade: 0,
    nivel: 0,
    modalidade: '',
    altura: 0,
    peso: 0,
    genero: '',
    ativo: false,
    foto: ''
  }
}
AdicionarDados(): void{
  this.editar.emit(this.lutadorEditado);
}

} 

