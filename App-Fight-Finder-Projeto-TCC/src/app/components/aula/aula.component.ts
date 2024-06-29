import { Component, Input } from '@angular/core';
import { Aula } from '../../interfaces/Aula';
import { Data } from '@angular/router';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrl: './aula.component.css'
})
export class AulaComponent {

  @Input() aula!: Aula;


  id: number = 1; 
  data:Data = new Date(2023, 6, 29); 
  lutadoresPresentes: number []= [1,2,3,4,5]; // Array de IDs de lutadores e treinadores
  treinadoresPresentes: number[]= [1,2,3]; // Array de IDs de lutadores e treinadores
  lutadoresAusentes: number []= [6,7,8,9]; // Array de IDs de lutadores e treinadores
  treinadoresAusentes: number[]= [4,5]; // Array de IDs de lutadores e treinadores
  horario: string = '19:00'; 
}

