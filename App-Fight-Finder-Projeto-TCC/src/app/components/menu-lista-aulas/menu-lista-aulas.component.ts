import { Component, EventEmitter, Output } from '@angular/core';
import { Treinador } from '../../interfaces/Treinador';
import { Lutador } from '../../interfaces/Lutador';
import { Aula } from '../../interfaces/Aula';

@Component({
  selector: 'app-menu-lista-aulas',
  templateUrl: './menu-lista-aulas.component.html',
  styleUrl: './menu-lista-aulas.component.css'
})
export class MenuListaAulasComponent {
    public daysArray: number[] = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ];
  
    public mesesArray: number[] = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ];
  
    // Defina o ano inicial desejado (por exemplo, 2024)
    private anoInicial: number = 2024;
    private anoAtual: number = new Date().getFullYear();
  
    // Criando o array com os anos
    public anosArray: number[] = [];
  
    constructor() {
      for (let i: number = this.anoInicial; i <= this.anoAtual; i++) {
        this.anosArray.push(i);
      }
    }
  
  listaaulas: Aula[] = [
    {
      id: 1,
      data: new Date(2024, 7, 15),
       horario:"19",
      lutadoresPresentes: [1],
      treinadoresPresentes: [1],
      lutadoresAusentes: [],
      treinadoresAusentes: [],
    }
  ];

  listaAulasFiltro: Aula[]= this.listaaulas; 

  @Output() filtro: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() listaAulas: Aula[] = [];

  tela(tela?:Boolean): void { 
    this.filtro.emit(tela); 
  }

   exibirTodos():void{
    this.listaAulasFiltro=this.listaaulas;
   }

    diaSelecionado: number | null = null;
  mesSelecionado: number | null = null;
  anoSelecionado: number | null = null;

  // Função para verificar se alguma aula corresponde à data selecionada
  verificarData(): void {
      this.listaAulasFiltro = [];
  
      if (this.anoSelecionado) {
        this.listaAulasFiltro = this.listaaulas.filter(aula => {
          const dataAula = new Date(aula.data);
          return dataAula.getFullYear() === this.anoSelecionado;
        });
      }
  
      if (this.mesSelecionado) {
        this.listaAulasFiltro = this.listaAulasFiltro.filter(aula => {
          const dataAula = new Date(aula.data);
          return dataAula.getMonth() === this.mesSelecionado;
        });
      }
  
      if (this.diaSelecionado) {
        this.listaAulasFiltro = this.listaAulasFiltro.filter(aula => {
          const dataAula = new Date(aula.data);
          return dataAula.getDate() === this.diaSelecionado;
        });
      }
    }
  }

