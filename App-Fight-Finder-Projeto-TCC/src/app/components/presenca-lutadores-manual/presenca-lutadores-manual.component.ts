import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lutador } from '../../interfaces/Lutador';

@Component({
  selector: 'app-presenca-lutadores-manual',
  templateUrl: './presenca-lutadores-manual.component.html',
  styleUrl: './presenca-lutadores-manual.component.css'
})


export class PresencaLutadoresManualComponent {
  @Input() listaLutadores: Lutador[] = [];
  @Input() lutador!: Lutador;
  
  @Output() salvar: EventEmitter<any> = new EventEmitter<any>(); 
@Output() editar: EventEmitter<any> = new EventEmitter<any>(); 
  @Output() presente: EventEmitter<any>=new EventEmitter(); 

  lutadoresSelecionados: Lutador[] = [];
  
  salvarLutadoresSelecionados(lutadores:Lutador[]): Lutador[] {
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
