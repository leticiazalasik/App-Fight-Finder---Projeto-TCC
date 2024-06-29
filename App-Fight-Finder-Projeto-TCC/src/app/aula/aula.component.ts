import { Component, Input } from '@angular/core';
import { Aula } from '../interfaces/aula';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrl: './aula.component.css'
})
export class AulaComponent {

  @Input() aula!: Aula;

  tamanhoTexto: string = '25px';

  id: number = 1; 
  data:string = ' ';
  lutadoresPresentes: number []= [1,2,3,4,5]; // Array de IDs de lutadores e treinadores
  treinadoresPresentes: number[]= [1,2,3]; // Array de IDs de lutadores e treinadores
  lutadoresAusentes: number []= [6,7,8,9]; // Array de IDs de lutadores e treinadores
  treinadoresAusentes: number[]= [4,5]; // Array de IDs de lutadores e treinadores
  horario: number = 19; 
}

