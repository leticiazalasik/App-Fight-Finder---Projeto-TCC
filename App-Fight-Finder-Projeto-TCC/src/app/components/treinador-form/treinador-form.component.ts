import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lutador } from '../../interfaces/Lutador';
import { Treinador } from '../../interfaces/Treinador';

@Component({
  selector: 'app-treinador-form',
  templateUrl: './treinador-form.component.html',
  styleUrl: './treinador-form.component.css'
})
export class TreinadorFormComponent {

  inserir: any;
  exibirFormulario: string | undefined;

  
  ngAfterViewInit() {
    this.ObterRadioSelecionadoString();
    this.ObterRadioSelecionado();

  }

  @Input() treinador: Treinador | null = null; 

  @Output() salvar: EventEmitter<any> = new EventEmitter<any>(); 
@Output() editar: EventEmitter<any> = new EventEmitter<any>(); 



treinadorEditado!: Treinador; 
limparTreinador():void {
  this.treinadorEditado={
    id: 0,
    nome: '',
    idade: 0,
    modalidade: '',
    ativo: false,
    foto: ''
  }
}


ngOnChanges(): void{
  if (this.treinador !=null ){
  
    this.treinadorEditado={
      id: this.treinador.id,
      nome: this.treinador.nome,
      idade: this.treinador.idade,
      modalidade: this.treinador.modalidade,
      ativo: this.treinador.ativo,
      foto: this.treinador.foto   ,
    }; 
    console.log(this.treinador.foto);
  } else {
    this.limparTreinador(); 
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
    this.treinadorEditado.foto = 'data:image/jpeg;base64,' + btoa(binaryString);
    console.log(this.treinadorEditado.foto);
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
  this.treinadorEditado.ativo= this.ObterRadioSelecionado(); 
  this.salvar.emit(this.treinadorEditado);
}


cancelar(): void {
  this.limparTreinador();
}


AdicionarDados(): void{
  this.editar.emit(this.treinadorEditado);
}

novoTreinador(novotreinador: Treinador): void {
  this.exibirFormulario='novo';
  
}

onSalvar(treinador:Treinador): void {
  this.exibirFormulario=' '; 
  
  if (treinador.id!=0){
  this.editar.emit(treinador);
  } else {
  this.inserir.emit(treinador); 
  }
}
}
