import { Component, EventEmitter, Output } from '@angular/core';
import { Lutador } from '../../interfaces/Lutador';


@Component({
  selector: 'app-menu-lista-lutadores',
  templateUrl: './menu-lista-lutadores.component.html',
  styleUrl: './menu-lista-lutadores.component.css'
})
export class MenuListaLutadoresComponent {

  
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

  listaLutadoresFiltro: Lutador[]= this.listalutadores; 

  @Output() filtro: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() listaLutadores: Lutador[] = [];

  tela(tela?:Boolean): void { 
    this.filtro.emit(tela); 
  }

   exibirTodos():void{
    this.listaLutadoresFiltro=this.listalutadores;
  }

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