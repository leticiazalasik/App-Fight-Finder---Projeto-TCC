import { Component, EventEmitter, Output } from '@angular/core';
import { Treinador } from '../../interfaces/Treinador';
import { Lutador } from '../../interfaces/Lutador';

@Component({
  selector: 'app-menu-lista-aulas',
  templateUrl: './menu-lista-aulas.component.html',
  styleUrl: './menu-lista-aulas.component.css'
})
export class MenuListaAulasComponent {

  listaTreinadores: Treinador[] = [
    {
      id: 1,
      nome: 'Antonio Valindolfo',
    idade: 40,
    modalidade: 'Taekwondo',
    ativo: false,
    foto: 'assets/img/perfil.png',
    }
  ];

  listaTreinadoresFiltro: Treinador[]= this.listaTreinadores; 

  @Output() filtro: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() listaLutadores: Lutador[] = [];

  tela(tela?:Boolean): void { 
    this.filtro.emit(tela); 
  }

   exibirTodos():void{
    this.listaTreinadoresFiltro=this.listaTreinadores;
  }
}
