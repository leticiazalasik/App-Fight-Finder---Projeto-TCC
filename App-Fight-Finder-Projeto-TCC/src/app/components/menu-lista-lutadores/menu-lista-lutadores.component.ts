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

  tela(tela?:Boolean): void { 
    this.filtro.emit(tela); 
  }

   exibirTodos():void{
    this.listaLutadoresFiltro=this.listalutadores;
  }

}
