import { Component, EventEmitter, Output } from '@angular/core';
import { ComentarioComponent } from '../comentario/comentario.component';
import { Comentario } from '../../interfaces/Comentario';
import { ComentarioService } from '../../../servicos/comentario.service';
import { Router } from '@angular/router';
import { Lutador } from '../../interfaces/Lutador';

@Component({
  selector: 'app-adicionar-comentario',
  templateUrl: './adicionar-comentario.component.html',
  styleUrls: ['./adicionar-comentario.component.css']
})
export class AdicionarComentarioComponent {

  comentario!: Comentario;
  lutador!: Lutador; 


  constructor(
    private comentarioService: ComentarioService, 
    private router: Router
  ){}
  

  limparComentario(): void {
    this.comentario = {
      id: 0,
      data: new Date("2024-09-07T10:00:00"),
      descricao: "",
      lutador_id: this.lutador,
    };
  }
  
  ngOnInit():void{ 
    this.limparComentario();
    }

salvarDados(): void{

this.comentarioService.add(this.comentario).subscribe(() => {
  this.router.navigate(['/resultadoLutas']);
});
}



  
}
