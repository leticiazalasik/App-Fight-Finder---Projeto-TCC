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

  listalutadores: Lutador[] = [
    {
      id: 1,
      nome: 'John Deik',
    idade: 31,
    modalidade: 'Taekwondo',
    nivel: 9,
    peso: 80,
    altura: 182,
    genero: 'masculino',
    ativo: false,
    foto: 'assets/img/perfil.png',
    
    }
  ];


  @Output() filtro: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  tela(tela?:Boolean): void { 
    this.filtro.emit(tela); 
  }

   exibirTodos():void{
    this.listaLutadoresFiltro=this.listalutadores;
  }
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

  

  filtrarLutadores(tela?: Boolean): void { 
    this.listaLutadoresFiltro = this.listaLutadores.filter(lutador => {
        return tela === undefined || lutador.ativo == tela; 
    });
}

nomePesquisado: string = '';
  
  pesquisarLutador(nomePesquisado: string): void {
    const lutadorEncontrado = this.listalutadores.find(lutador =>
      lutador.nome.toLowerCase() === nomePesquisado.toLowerCase()
    );
  
    if (lutadorEncontrado) {
      // Adicione o lutador à lista listaLutadoresFiltro
      this.listaLutadoresFiltro.push(lutadorEncontrado);
      console.log(`Lutador encontrado: ${lutadorEncontrado.nome}`);
      // Faça outras operações necessárias com o lutador encontrado
    } else {
      // Exiba um alerta informando que o lutador não foi encontrado
      alert('Lutador não encontrado.');
    }
  }
  

}
