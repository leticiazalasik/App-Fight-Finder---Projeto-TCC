import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aula } from '../../interfaces/Aula';

@Component({
  selector: 'app-aula-edit',
  templateUrl: './aula-edit.component.html',
  styleUrl: './aula-edit.component.css'
})
export class AulaEditComponent {

  @Output() excluir: EventEmitter<number>=new EventEmitter<number>();


  @Input() listaAulas: Aula[] = [];
  @Input() aula!: Aula;


  @Output() editar: EventEmitter<any>=new EventEmitter(); 

  @Output() inserir: EventEmitter<any>=new EventEmitter();

  @Output() inativar: EventEmitter<any> = new EventEmitter();



  aulaEditar:Aula|null=null;
  exibirFormulario: string=''; 

  excluirAula (id:number): void {
    this.excluir.emit(id); 
  }

  editarAula(aula:Aula): void {
    this.exibirFormulario='editar';
    this.aulaEditar=aula;
  }

  novaAula(): void {
    this.exibirFormulario='novo';
    this.aulaEditar=null;
  }
  onSalvar(aula:Aula): void {
    this.exibirFormulario=' '; 
    if (aula.id!=0){
    this.editar.emit(aula);
    } else {
    this.inserir.emit(aula); 
    }
  }

}
