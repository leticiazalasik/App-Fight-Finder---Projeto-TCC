import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Treinador } from '../../interfaces/Treinador';
import { Aula } from '../../interfaces/Aula';

@Component({
  selector: 'app-aula-list',
  templateUrl: './aula-list.component.html',
  styleUrl: './aula-list.component.css'
})
export class AulaListComponent {

  @Input() aula!: Aula;

  @Input() listaAulas: Aula[] = [];

  @Input() salvar: any;


  listaAulasFiltro: Aula[]= this.listaAulas; 

  ngOnInit() {
    this.listaAulasFiltro = this.listaAulas;
  }

  @Output() excluir: EventEmitter<number>=new EventEmitter<number>();

  @Output() editar: EventEmitter<any>=new EventEmitter(); 

  @Output() inserir: EventEmitter<any>=new EventEmitter();

  aulaEditar:Aula|null=null;
  exibirFormulario: string=''; 

  excluirAula (id:number): void {
    this.excluir.emit(id); 
  }

  editarAula(aula:Aula): void {
    this.exibirFormulario='editar';
    this.aulaEditar=aula;
  }

  novaAula(novaAula: Aula): void {
    this.exibirFormulario='nova';
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

  filtro:Boolean=true; 

  telaAulasFiltro(tela:Boolean):void{
  this.filtro=tela; 
  console.log(tela);
  this.filtrarAulas(tela);
  }

  filtrarAulas(tela?: Boolean): void { 
    this.listaAulasFiltro = this.listaAulas;
    }
}

