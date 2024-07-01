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


  @Output() presente: EventEmitter<any>=new EventEmitter(); 


  filtrarLutadoresSelecionados(lutadores:Lutador[]): Lutador[] {
    const lutadoresSelecionados = lutadores.filter(lutador => {
      // Verifica se o botão de rádio está selecionado (ou seja, presente)
      const radioSelecionado = document.querySelector(`input[name="lutador${lutador.id}"]:checked`);
      return radioSelecionado !== null;
  });
  return lutadoresSelecionados;
  console.log(lutadoresSelecionados);

}



// Filtra a lista de alunos e armazena o resultado
  

  inativarLutador(lutador: Lutador): void {
    lutador.ativo = !lutador.ativo;
  }


}
