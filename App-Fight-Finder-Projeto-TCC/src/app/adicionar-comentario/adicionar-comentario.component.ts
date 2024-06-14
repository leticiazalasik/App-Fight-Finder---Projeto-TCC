import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-adicionar-comentario',
  templateUrl: './adicionar-comentario.component.html',
  styleUrl: './adicionar-comentario.component.css'
})
export class AdicionarComentarioComponent {

  @Output() novoComentario = new EventEmitter<Comentario>();

  adicionarComentario(texto: string) {
    const comentario = new Comentario();
    comentario.texto = texto;
    this.novoComentario.emit(comentario);
  }
}
