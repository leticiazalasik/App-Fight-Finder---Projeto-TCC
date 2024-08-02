import { Component } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent {

  id: number = 1; 
  data: Date = new Date();
  descricao: String = 'lll '; 
  nomeLutador: String = 'John';

}

