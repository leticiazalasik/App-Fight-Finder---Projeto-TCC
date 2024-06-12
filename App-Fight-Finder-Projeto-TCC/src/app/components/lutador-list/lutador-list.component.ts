import { Component, Input, OnInit, } from '@angular/core';
import { Lutador } from '../../interfaces/Lutador';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-lutador-list',
  templateUrl: './lutador-list.component.html',
  styleUrl: './lutador-list.component.css'
})
export class LutadorListComponent implements OnInit{

  @Input() lutador!: Lutador;

  @Input() listaLutadores: Lutador[] = [];

  @Input() salvar: any;


  listaLutadoresFiltro: Lutador[]= this.listaLutadores; 

  ngOnInit() {
    this.listaLutadoresFiltro = this.listaLutadores;
  }

  @Output() excluir: EventEmitter<number>=new EventEmitter<number>();

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

  novoLutador(novoLutador: Lutador): void {
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

  filtro:Boolean=true; 

  telaLutadoresFiltro(tela:Boolean):void{
  this.filtro=tela; 
  console.log(tela);
  this.filtrarLutadores(tela);
  }

  filtrarLutadores(tela?:Boolean):void{ 
    //opção usando Filter
    this.listaLutadoresFiltro=this.listaLutadores.filter(lutador=>{
      return lutador.ativo==tela; 
      console.log(tela);
    }); 

   }
   exibirTodos():void{
    this.listaLutadoresFiltro=this.listaLutadores;
  }
}

