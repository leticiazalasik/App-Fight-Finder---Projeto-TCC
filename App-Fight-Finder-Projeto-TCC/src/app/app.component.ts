import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Lutador } from './interfaces/Lutador';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'App-Fight-Finder-Projeto-TCC';
  
telaAtual: string = '';

  listaLutadoresFiltro: any;
  listalutadores: any;

    novaTelaAtual(tela: string) {
      this.telaAtual = tela;
      console.log('Recebendo evento:', tela);

    
  }
  
}