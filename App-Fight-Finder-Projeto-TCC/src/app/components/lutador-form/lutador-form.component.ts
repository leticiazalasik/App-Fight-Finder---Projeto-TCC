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
  inserir: any;
  exibirFormulario: string | undefined;

  ngOnInit() {
    this.limparLutador();
  }
  
  ngAfterViewInit() {
    this.ObterRadioSelecionadoString();
    this.ObterRadioSelecionado();

  }

  @Input() lutador: Lutador | null = null; 

  @Output() salvar: EventEmitter<any> = new EventEmitter<any>(); 
@Output() editar: EventEmitter<any> = new EventEmitter<any>(); 



lutadorEditado!: Lutador; 
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
      foto: this.lutador.foto   ,
    }; 
    console.log(this.lutador.foto);
  } else {
    this.limparLutador(); 
  }
  }

onFileSelected(event: any) {
  const file: File = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsArrayBuffer(file);

    let fileNameElement = document.getElementById('file-name');
    if (fileNameElement) {
      fileNameElement.textContent = file.name;
    }
  } else {
    // Limpe o nome do arquivo se nenhum arquivo for selecionado
    let fileNameElement = document.getElementById('file-name');
    if (fileNameElement) {
      fileNameElement.textContent = 'Nenhum arquivo selecionado';
    }
  }
  
}

handleReaderLoaded(readerEvt: ProgressEvent<FileReader>) {
  if (readerEvt && readerEvt.target && readerEvt.target.result) {
    let arrayBuffer = readerEvt.target.result as ArrayBuffer;
    let binaryString = Array.from(new Uint8Array(arrayBuffer)).map(b => String.fromCharCode(b)).join('');
    this.lutadorEditado.foto = 'data:image/jpeg;base64,' + btoa(binaryString);
    console.log(this.lutadorEditado.foto);
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


AdicionarDados(): void{
  this.editar.emit(this.lutadorEditado);
}

novoLutador(novoLutador: Lutador): void {
  this.exibirFormulario='novo';
  
}

onSalvar(lutador:Lutador): void {
  this.exibirFormulario=' '; 
  
  if (lutador.id!=0){
  this.editar.emit(lutador);
  } else {
  this.inserir.emit(lutador); 
  }
}

} 