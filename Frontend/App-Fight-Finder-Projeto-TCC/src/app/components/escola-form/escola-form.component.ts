import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Escola } from '../../interfaces/Escola';

@Component({
  selector: 'app-escola-form',
  templateUrl: './escola-form.component.html',
  styleUrl: './escola-form.component.css'
})
export class EscolaFormComponent {

  inserir: any;
  exibirFormulario: string | undefined;


  @Input() escola: Escola | null = null; 
  @Output() salvar: EventEmitter<any> = new EventEmitter<any>(); 
@Output() editar: EventEmitter<any> = new EventEmitter<any>(); 

escolaEditada!:Escola; 

limparEscola():void {
this.escolaEditada={
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
       

salvarDados(): void{

  this.salvar.emit(this.escolaEditada);
}


cancelar(): void {
  this.limparEscola();
}


AdicionarDados(): void{
  this.editar.emit(this.escolaEditada);
}

novoLutador(novaEscola: Escola): void {
  this.exibirFormulario='novo';
  
}

onSalvar(escola:Escola): void {
  this.exibirFormulario=' '; 
  
  if (escola.id!=0){
  this.editar.emit(escola);
  } else {
  this.inserir.emit(escola); 
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
    this.escolaEditada.foto = 'data:image/jpeg;base64,' + btoa(binaryString);
    console.log(this.escolaEditada.foto);
  }
  
}
} 
