import { Component, EventEmitter, Output } from '@angular/core';
import { Treinador } from '../../interfaces/Treinador';

@Component({
  selector: 'app-menu-lista-treinadores',
  templateUrl: './menu-lista-treinadores.component.html',
  styleUrl: './menu-lista-treinadores.component.css'
})
export class MenuListaTreinadoresComponent {

  listatreinadores: Treinador[] = [
    {
      id: 1,
      nome: 'Antonio Valindolfo',
    idade: 40,
    modalidade: 'Taekwondo',
    ativo: false,
    foto: 'assets/img/perfil.png',
    
    }
  ];

  listaTreinadoresFiltro: Treinador[]= this.listatreinadores; 

  @Output() filtro: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() listaTreinadores: Treinador[] = [];

  tela(tela?:Boolean): void { 
    this.filtro.emit(tela); 
  }

   exibirTodos():void{
    this.listaTreinadoresFiltro=this.listatreinadores;
  }

}
