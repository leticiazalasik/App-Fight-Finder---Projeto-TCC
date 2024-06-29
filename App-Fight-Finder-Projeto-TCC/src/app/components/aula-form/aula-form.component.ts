import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aula } from '../../interfaces/Aula';

@Component({
  selector: 'app-aula-form',
  templateUrl: './aula-form.component.html',
  styleUrl: './aula-form.component.css'
})
export class AulaFormComponent {
  @Input() aula: Aula | null = null; 

  @Output() salvar: EventEmitter<any> = new EventEmitter<any>(); 
  @Output() editar: EventEmitter<any> = new EventEmitter<any>(); 
  

  aulaEditada!: Aula; 
  limparAula():void {
    this.aulaEditada={
      id: 0,
      data: new Date(0, 0, 0),
      lutadoresPresentes: [],
      treinadoresPresentes: [], // Array de IDs de lutadores e treinadores
      lutadoresAusentes: [], // Array de IDs de lutadores e treinadores
      treinadoresAusentes: [4,5], // Array de IDs de lutadores e treinadores
      horario: '19:00',
    }
  }

  ngOnChanges(): void{
    if (this.aula !=null ){
    
      this.aulaEditada={
        id: this.aula.id,
        data: this.aula.data,
        lutadoresPresentes: this.aula.lutadoresPresentes,
        treinadoresPresentes: this.aula.treinadoresPresentes,
        lutadoresAusentes: this.aula.lutadoresAusentes,
        treinadoresAusentes: this.aula.treinadoresAusentes,
        horario: this.aula.horario,
      };
      this.limparAula(); 
    }
    }
  


}
