import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Treinador } from '../../interfaces/Treinador';

@Component({
  selector: 'app-treinador-list',
  templateUrl: './treinador-list.component.html',
  styleUrl: './treinador-list.component.css'
})
export class TreinadorListComponent implements OnInit{

  @Input() treinador!: Treinador;

  @Input() listaTreinadores: Treinador[] = [];

  @Input() salvar: any;


  listaTreinadoresFiltro: Treinador[]= this.listaTreinadores; 

  ngOnInit() {
    this.listaTreinadoresFiltro = this.listaTreinadoresFiltro;
  }

  @Output() excluir: EventEmitter<number>=new EventEmitter<number>();

  @Output() editar: EventEmitter<any>=new EventEmitter(); 

  @Output() inserir: EventEmitter<any>=new EventEmitter();

  treinadorEditar:Treinador|null=null;
  exibirFormulario: string=''; 

  excluirTreinador (id:number): void {
    this.excluir.emit(id); 
  }

  editarTreinador(treinador:Treinador): void {
    this.exibirFormulario='editar';
    this.treinadorEditar=treinador;
  }

  novoTreinador(novoTreinador: Treinador): void {
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

  filtro:Boolean=true; 

  telaTreinadoresFiltro(tela:Boolean):void{
  this.filtro=tela; 
  console.log(tela);
  this.filtrarTreinadores(tela);
  }

  filtrarTreinadores(tela?: Boolean): void { 
    this.listaTreinadoresFiltro = this.listaTreinadores.filter(treinadores => {
        return tela === undefined || this.treinador.ativo == tela; 
    });
}


}
