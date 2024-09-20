import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { filter } from 'rxjs';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComentarioComponent } from './components/Comentario-components/comentario/comentario.component';

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