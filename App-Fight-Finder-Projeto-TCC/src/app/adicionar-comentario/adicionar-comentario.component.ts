import { Component, EventEmitter, Output } from '@angular/core';
import { ComentarioComponent } from '../comentario/comentario.component';

@Component({
  selector: 'app-adicionar-comentario',
  templateUrl: './adicionar-comentario.component.html',
  styleUrls: ['./adicionar-comentario.component.css']
})
export class AdicionarComentarioComponent {

  @Output() novoComentario = new EventEmitter<ComentarioComponent>();

  adicionarComentario(descricao: string, nomeLutador:string){
    const comentario = new ComentarioComponent();
    comentario.descricao = descricao; 
    comentario.data=new Date(); 
    comentario.nomeLutador=nomeLutador; 
    this.novoComentario.emit(comentario);
  }
}
