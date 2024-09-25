import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lutador } from '../../interfaces/Lutador';

@Component({
  selector: 'app-presenca-lutadores-manual',
  templateUrl: './presenca-lutadores-manual.component.html',
  styleUrl: './presenca-lutadores-manual.component.css'
})


export class PresencaLutadoresManualComponent {
  @Input() lutador!: Lutador;
  
  @Output() salvar: EventEmitter<any> = new EventEmitter<any>(); 
@Output() editar: EventEmitter<any> = new EventEmitter<any>(); 
  @Output() presente: EventEmitter<any>=new EventEmitter(); 

  listaLutadores: Lutador[] = [
    {
      id: 1,
      nome: 'John Deik',
    idade: 31,
    modalidade: 'Taekwondo',
    isColorida: false,
    peso: 80,
    altura: 180,
    genero: 'masculino',
    ativo: true,
    foto: 'assets/img/perfil.png',
    comentarios: [],
    vitorias: 2, 
    empates: 1,
    derrotas: 0,
    observacoes: '', 
    turma: 19
    }
  ];
  lutadoresSelecionados: Lutador[] = [];

  ngOnInit() {
    this.listaLutadores = this.listaLutadores;
  }
  
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
