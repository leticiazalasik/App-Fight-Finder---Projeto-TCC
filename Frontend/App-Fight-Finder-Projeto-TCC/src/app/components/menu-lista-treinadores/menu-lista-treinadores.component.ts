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

  nomePesquisado: string = '';
  
  pesquisarTreinador(nomePesquisado: string): void {
    const treinadorEncontrado = this.listatreinadores.find(treinador =>
      treinador.nome.toLowerCase() === nomePesquisado.toLowerCase()
    );
  
    if (treinadorEncontrado) {
      // Adicione o lutador à lista listaLutadoresFiltro
      this.listaTreinadoresFiltro.push(treinadorEncontrado);
      console.log(`Lutador encontrado: ${treinadorEncontrado.nome}`);
      // Faça outras operações necessárias com o lutador encontrado
    } else {
      // Exiba um alerta informando que o lutador não foi encontrado
      alert('Treinador não encontrado.');
    }
  }

}
