import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Lutador } from '../../interfaces/Lutador';
import { AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-lutador-form',
  templateUrl: './lutador-form.component.html',
  styleUrl: './lutador-form.component.css'
})
export class LutadorFormComponent {

  ngAfterViewInit() {
    this.ObterRadioSelecionadoString();
    this.ObterRadioSelecionado();

  }

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
  const radioSelecionado = document.querySelector('input[name="ativo"]:checked')?.getAttribute('id');
if (radioSelecionado==='true'){
  return true; 
} else {
  return false; 
}
}

ObterRadioSelecionadoString(): string {
  const radioSelecionado = document.querySelector('input[name="genero"]:checked')?.getAttribute('id');
if (radioSelecionado==='Feminino'){
  return 'Feminino'; 
} else {
  return 'Masculino'; 
}
}


salvarDados(): void{
  this.lutadorEditado.ativo= this.ObterRadioSelecionado(); 
  this.lutadorEditado.genero= this.ObterRadioSelecionadoString(); 

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