import { Component, Input, Output } from '@angular/core';
import { Lutador } from '../../interfaces/Lutador';

@Component({
  selector: 'app-lutador',
  templateUrl: './lutador.component.html',
  styleUrl: './lutador.component.css'
})
export class LutadorComponent {
  @Input() lutador!: Lutador;

  tamanhoTexto: string = '25px';

  id: number = 1; 
  nome: string = 'John Deik';
idade: number = 31; 
modalidade: string ='Taekwondo'; 
nivel: number = 9; 
peso: number = 80; 
altura: number = 182;
genero: string= 'masculino';
ativo: Boolean= true;

}
