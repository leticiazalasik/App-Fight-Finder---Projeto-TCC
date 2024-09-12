import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Lutador } from '../../interfaces/Lutador';
import { LutadorListComponent } from '../lutador-list/lutador-list.component';

@Component({
  selector: 'app-lutador-edit',
  templateUrl: './lutador-edit.component.html',
  styleUrl: './lutador-edit.component.css'
})
export class LutadorEditComponent {

  @Output() excluir: EventEmitter<number>=new EventEmitter<number>();


  @Input() listaLutadores: Lutador[] = [];
  @Input() lutador!: Lutador;


  @Output() editar: EventEmitter<any>=new EventEmitter(); 

  @Output() inserir: EventEmitter<any>=new EventEmitter();

  @Output() inativar: EventEmitter<any> = new EventEmitter();



  lutadorEditar:Lutador|null=null;
  exibirFormulario: string=''; 

  excluirLutador (id:number): void {
    this.excluir.emit(id); 
  }

  editarLutador(lutador:Lutador): void {
    this.exibirFormulario='editar';
    this.lutadorEditar=lutador;
  }

  novoLutador(): void {
    this.exibirFormulario='novo';
    this.lutadorEditar=null;
  }
  onSalvar(lutador:Lutador): void {
    this.exibirFormulario=' '; 
    if (lutador.id!=0){
    this.editar.emit(lutador);
    } else {
    this.inserir.emit(lutador); 
    }
  }

  inativarLutador(lutador: Lutador): void {
    lutador.ativo = !lutador.ativo;

  }

}

