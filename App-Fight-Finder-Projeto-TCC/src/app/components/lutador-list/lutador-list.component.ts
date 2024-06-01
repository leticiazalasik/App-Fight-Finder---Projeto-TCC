import { Component, Input, } from '@angular/core';
import { Lutador } from '../../interfaces/Lutador';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-lutador-list',
  templateUrl: './lutador-list.component.html',
  styleUrl: './lutador-list.component.css'
})
export class LutadorListComponent {

  @Output() excluir: EventEmitter<number>=new EventEmitter<number>();

  @Input() listaLutadores: Lutador[] = [];
  @Input() lutador!: Lutador;


  @Output() editar: EventEmitter<any>=new EventEmitter(); 

  @Output() inserir: EventEmitter<any>=new EventEmitter();

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
}
