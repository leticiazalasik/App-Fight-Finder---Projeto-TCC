import { Component, Input } from '@angular/core';
import { Treinador } from '../../interfaces/Treinador';

@Component({
  selector: 'app-treinador',
  templateUrl: './treinador.component.html',
  styleUrl: './treinador.component.css'
})
export class TreinadorComponent {

  @Input() lutador!: Treinador;

  tamanhoTexto: string = '25px';

  id: number = 1; 
  nome: string = 'John Deik';
idade: number = 31; 
modalidade: string ='Taekwondo'; 
ativo: Boolean= true;
foto = 'assets/img/perfil.png';

}
