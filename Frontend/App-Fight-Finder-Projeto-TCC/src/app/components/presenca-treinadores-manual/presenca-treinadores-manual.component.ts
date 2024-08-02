import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Treinador } from '../../interfaces/Treinador';

@Component({
  selector: 'app-presenca-treinadores-manual',
  templateUrl: './presenca-treinadores-manual.component.html',
  styleUrl: './presenca-treinadores-manual.component.css'
})
export class PresencaTreinadoresManualComponent {
  @Input() listaTreinadores: Treinador[] = [];
  @Input() treinador!: Treinador;
  
  @Output() salvar: EventEmitter<any> = new EventEmitter<any>(); 
@Output() editar: EventEmitter<any> = new EventEmitter<any>(); 
  @Output() presente: EventEmitter<any>=new EventEmitter(); 

  treinadoresSelecionados: Treinador[] = [];
  
  salvarTreinadoresSelecionados(treinadores:Treinador[]): Treinador[] {
    this.treinadoresSelecionados = treinadores.filter(treinador => {
      const radioSelecionado = document.querySelector(`input[name="lutador${treinador.id}"]:checked`);
      return radioSelecionado !== null;
  });
  return this.treinadoresSelecionados;
  console.log(this.treinadoresSelecionados);
  this.salvar.emit(this.treinadoresSelecionados);
}


cancelar(): void {
  this.treinadoresSelecionados=[];
}

}
