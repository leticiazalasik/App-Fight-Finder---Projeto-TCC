import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrl: './menu-inicial.component.css'
})
export class MenuInicialComponent {

  @Output() telaAtual = new EventEmitter<string>();

  listaLutadoresFiltro: any;
  listalutadores: any;

  tela(tela: string) {
    this.telaAtual.emit(tela);

    if (tela=='editarLutadores'){ 
      this.listaLutadoresFiltro=this.listalutadores; 
    }
}
}
