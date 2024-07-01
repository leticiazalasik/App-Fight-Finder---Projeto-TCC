import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Lutador } from './interfaces/Lutador';
import { filter } from 'rxjs';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  // ...
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SeuModulo { }

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

    
  }
  
  adicionarComentarioAoLutador(comentario: ComentarioComponent) {
    // adicione o comentário ao lutador aqui
  }
}