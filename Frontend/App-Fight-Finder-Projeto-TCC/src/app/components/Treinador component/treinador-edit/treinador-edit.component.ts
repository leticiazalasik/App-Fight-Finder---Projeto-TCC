import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Treinador } from '../../interfaces/Treinador';

@Component({
  selector: 'app-treinador-edit',
  templateUrl: './treinador-edit.component.html',
  styleUrl: './treinador-edit.component.css'
})
export class TreinadorEditComponent {

  @Output() excluir: EventEmitter<number>=new EventEmitter<number>();


  @Input() listaTreinadores: Treinador[] = [];
  @Input() treinador!: Treinador;


  @Output() editar: EventEmitter<any>=new EventEmitter(); 

  @Output() inserir: EventEmitter<any>=new EventEmitter();

  @Output() inativar: EventEmitter<any> = new EventEmitter();



treinadorEditar:Treinador|null=null;
  exibirFormulario: string=''; 

  excluirTreinador (id:number): void {
    this.excluir.emit(id); 
  }

  editarTreinador(treinador:Treinador): void {
    this.exibirFormulario='editar';
    this.treinadorEditar=treinador;
  }

  novoTreinador(): void {
    this.exibirFormulario='novo';
    this.treinadorEditar=null;
  }
  onSalvar(treinador:Treinador): void {
    this.exibirFormulario=' '; 
    if (treinador.id!=0){
    this.editar.emit(treinador);
    } else {
    this.inserir.emit(treinador); 
    }
  }

  inativarTreinador(treinador: Treinador): void {
    treinador.ativo = !treinador.ativo;

  }
}
