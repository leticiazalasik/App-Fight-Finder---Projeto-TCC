import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Treinador } from '../interfaces/Treinador';

@Component({
  selector: 'app-presenca-treinadores-manual',
  templateUrl: './presenca-treinadores-manual.component.html',
  styleUrl: './presenca-treinadores-manual.component.css'
})
export class PresencaTreinadoresManualComponent {
  @Input() listaTreinadores: Lutador[] = [];
  @Input() treinador!: Lutador;
  
  @Output() salvar: EventEmitter<any> = new EventEmitter<any>(); 
@Output() editar: EventEmitter<any> = new EventEmitter<any>(); 
  @Output() presente: EventEmitter<any>=new EventEmitter(); 

  treinadoresSelecionados: Treinador[] = [];
  
  salvarTreinadoresSelecionados(lutadores:Lutador[]): Lutador[] {
    this.lutadoresSelecionados = lutadores.filter(lutador => {
      const radioSelecionado = document.querySelector(`input[name="lutador${lutador.id}"]:checked`);
      return radioSelecionado !== null;
  });
  return this.lutadoresSelecionados;
  console.log(this.lutadoresSelecionados);
  this.salvar.emit(this.lutadoresSelecionados);
}


cancelar(): void {
  this.lutadoresSelecionados=[];
}

}
