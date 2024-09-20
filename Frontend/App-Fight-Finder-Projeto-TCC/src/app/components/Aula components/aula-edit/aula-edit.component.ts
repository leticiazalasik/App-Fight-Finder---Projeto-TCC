import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aula } from '../../interfaces/Aula';

@Component({
  selector: 'app-aula-edit',
  templateUrl: './aula-edit.component.html',
  styleUrl: './aula-edit.component.css'
})
export class AulaEditComponent {

  exibirTabelaTreinadores = false;
  exibirTabelaLutadoresDaTurma = false; 
  exibirTabelaLutadoresAtivos = false; 

}
