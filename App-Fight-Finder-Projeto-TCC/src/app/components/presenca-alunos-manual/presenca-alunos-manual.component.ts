import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lutador } from '../../interfaces/Lutador';

@Component({
  selector: 'app-presenca-alunos-manual',
  templateUrl: './presenca-alunos-manual.component.html',
  styleUrl: './presenca-alunos-manual.component.css'
})


export class PresencaAlunosManualComponent {
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
