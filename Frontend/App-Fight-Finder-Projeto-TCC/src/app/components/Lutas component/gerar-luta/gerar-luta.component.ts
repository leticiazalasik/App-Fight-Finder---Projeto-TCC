import { Component, Input } from '@angular/core';
import { Luta } from '../../interfaces/Luta';
import { LutaService } from '../../../servicos/luta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TreinadorComponent } from '../../Treinador component/treinador/treinador.component';
import { Treinador } from '../../interfaces/Treinador';
import { Lutador } from '../../interfaces/Lutador';
import { LutadorAula } from '../../interfaces/LutadorAula';
import { TreinadorAula } from '../../interfaces/TreinadorAula';
import { AulaService } from '../../../servicos/aula.service';
import { LutadorService } from '../../../servicos/lutador.service';
import { TreinadorService } from '../../../servicos/treinador.service';

@Component({
  selector: 'app-gerar-luta',
  templateUrl: './gerar-luta.component.html',
  styleUrl: './gerar-luta.component.css'
})
export class GerarLutaComponent {
  listaTreinadores!: Treinador[];
  listaFiltradaLutadores!: Lutador[];
  listaFiltradaTreinadores!: Treinador[];

  aulaService: any;
  aula: any;
  aulasAtivas: any;
  aulaAtiva: any;
  listaLutadorAula: LutadorAula[] = [];
  listaTreinadorAula: TreinadorAula[] = [];
  isEdicao: boolean = false;

  varNumero: number = 0;


  constructor(
    private lutaService: LutaService,
    private router: Router,
    private route: ActivatedRoute,
    private lutadorService: LutadorService,
    private treinadorService: TreinadorService
  ) { }

  @Input() luta: Luta | null = null;
  exibirFormulario: string | undefined;

  treinador!: Treinador;
  lutador1!: Lutador;
  lutador2!: Lutador;
  treinadoresPresentes!: Treinador[];
  lutadoresPresentes!: Lutador[];

  varIsGenero!: Boolean;
  varIdade!: number;
  varFaixa!: Boolean;
  varPeso!: number;
  varAltura!: number;
  varIsColorida!: Boolean;

  treinadores!: Treinador;
  lutadores!: Lutador;

  listaLutadores: Lutador[] = [];

  filtroSelecionado: string = '';
  lutadoresSelecionados: number[] = []; // IDs dos lutadores selecionados
  treinadoresSelecionados: number[] = []; // IDs dos lutadores selecionados

  lutaEditada!: Luta;
  limparLuta(): void {
    this.lutaEditada = {
      id: 0,
      status: false,
      treinador: this.treinador,
      lutador1: this.lutador1,
      lutador2: this.lutador1
        }
  }


  ngOnChanges(): void {
    if (this.treinador != null) {

      this.lutaEditada = {
        id: this.lutaEditada.id,
        status: this.lutaEditada.status,
        treinador: this.lutaEditada.treinador,
        lutador1: this.lutaEditada.lutador1,
        lutador2: this.lutaEditada.lutador2,
      };
    } else {
      this.limparLuta();
    }
  }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id && id != 0) {
      this.isEdicao = true;
      this.aulaService.findById(id).subscribe((data: any) => {
        this.aula = data;
      });

    }

    this.lutadorService.findAll().subscribe(data => {
      this.listaLutadores = data;
      this.listaFiltradaLutadores = this.listaLutadores; // Exibe todos ao carregar a página
      this.criarListaLutadorAula(this.listaLutadores);
    });

    this.treinadorService.findAll().subscribe(data => {
      this.listaTreinadores = data;
      this.listaFiltradaTreinadores = this.listaTreinadores; // Exibe todos ao carregar a página
      this.criarListaTreinadorAula(this.listaTreinadores);
    });

    this.limparLuta();
  }


  criarListaLutadorAula(listaLutadores: Lutador[]) {
    listaLutadores.forEach(lutador => {
      const LutadorAula: LutadorAula = {
        id: undefined,
        presente: true,
        lutador: lutador,
        aulaLutador: undefined
      };
      this.listaLutadorAula.push(LutadorAula);

    });
  }

  criarListaTreinadorAula(listaTreinadores: Treinador[]) {
    listaTreinadores.forEach(treinador => {
      const TreinadorAula: TreinadorAula = {
        id: undefined,
        presente: true,
        treinador: treinador,
        aulaTreinador: undefined
      };
      this.listaTreinadorAula.push(TreinadorAula);

    });
  }

  salvarDados(): void {
    this.lutaService.add(this.lutaEditada).subscribe(() => {
      this.router.navigate(['/menuInicial']);
    });
  }


  cancelar(): void {
    this.limparLuta();
  }



  filtrarAulas() {
    this.aulaService.findAll().subscribe((aulas: any[]) => {
      this.aulasAtivas = aulas.filter(aula => aula.status === true);

      // Agora que você tem a lista de aulas ativas, pode pegar a primeira ou alguma específica
      if (this.aulasAtivas.length > 0) {
        this.aulaAtiva = this.aulasAtivas[0]; // Exemplo: pegando a primeira aula ativa
        this.aula.hora = this.aulaAtiva.hora; // Atualizando a hora da aula ativa
      }
    });
  }
  // Método para filtrar a lista
  filtrarLutadores() {
    // Primeiro, encontre a aula ativa baseada no horário atual ou qualquer outra lógica
    this.aulaService.getAulaAtiva().subscribe((aulaAtiva: any) => {
      if (aulaAtiva) {
        this.aula = aulaAtiva; // Definindo a aula ativa para poder acessar sua hora

        // Agora que temos a aula ativa, aplicamos os filtros
        if (this.filtroSelecionado === 'alunosDaTurma') {
          // Filtra os lutadores que têm a mesma turma (horário) da aula ativa
          this.listaFiltradaLutadores = this.listaLutadores.filter(
            lutador => lutador.turma === this.aula.hora
          );

          // Seleciona todos os lutadores filtrados por padrão
          this.lutadoresSelecionados = this.listaFiltradaLutadores.map(
            lutador => lutador.id
          );
        } else if (this.filtroSelecionado === 'todosLutadoresAtivos') {
          // Filtra os lutadores que estão ativos
          this.listaFiltradaLutadores = this.listaLutadores.filter(
            lutador => lutador.ativo === true
          );
        } else {
          // Caso contrário, mostra todos os lutadores
          this.listaFiltradaLutadores = this.listaLutadores;
        }
      }
    });
  }

  // Método para filtrar a lista
  filtrarTreinadores() {
    // Primeiro, encontre a aula ativa baseada no horário atual ou qualquer outra lógica
    this.aulaService.getAulaAtiva().subscribe((aulaAtiva: any) => {
      if (aulaAtiva) {
        this.aula = aulaAtiva; // Definindo a aula ativa para poder acessar sua hora

        // Agora que temos a aula ativa, aplicamos os filtros
        if (this.filtroSelecionado === 'alunosDaTurma') {
          // Filtra os lutadores que têm a mesma turma (horário) da aula ativa
          this.listaFiltradaLutadores = this.listaLutadores.filter(
            lutador => lutador.turma === this.aula.hora
          );

          // Seleciona todos os lutadores filtrados por padrão
          this.lutadoresSelecionados = this.listaFiltradaLutadores.map(
            lutador => lutador.id
          );
        } else if (this.filtroSelecionado === 'todosLutadoresAtivos') {
          // Filtra os lutadores que estão ativos
          this.listaFiltradaLutadores = this.listaLutadores.filter(
            lutador => lutador.ativo === true
          );
        } else {
          // Caso contrário, mostra todos os lutadores
          this.listaFiltradaLutadores = this.listaLutadores;
        }
      }
    });
  }
  onLutadorChange(lutadorAula: LutadorAula, event: any) {
    if (event.target.checked) {
      this.lutadoresSelecionados.push(lutadorAula.lutador.id);
    } else {
      this.lutadoresSelecionados = this.lutadoresSelecionados.filter(id => id !== lutadorAula.lutador.id);
    }
  }

  onTreinadorChange(treinadorAula: TreinadorAula, event: any) {
    if (event.target.checked) {
      this.treinadoresSelecionados.push(treinadorAula.treinador.id);
    } else {
      this.treinadoresSelecionados = this.treinadoresSelecionados.filter(id => id !== treinadorAula.treinador.id);
    }
  }


  // salvar(): void {
  //   this.lutaService.add().subscribe(() => {
  //     this.router.navigate(['/luta']);
  //   });
  // }

  // listaLutadorLuta: LutadorAula[]= this.listaLutadorAula
  // listaTreinadorLuta: TreinadorAula[]= this.listaTreinadorAula

  // gerarLutas(): void{ 
  //   while (this.listaTreinadorLuta.length > 0) {
  //     const treinador = this.treinadores.pop(); // Pega um treinador da lista
  //     if (!treinador) break; // Se não houver mais treinadores, saia do loop
  
  //     const lutador1 = getRandomLutador(this.listaLutadorLuta); // Pega um lutador aleatório
  //     const lutador2 = getRandomLutador(this.listaLutadorLuta); // Pega outro lutador aleatório
  
  //     // Crie a luta com os lutadores escolhidos
  //     const novaLuta: Lutador[] = [lutador1, lutador2];
  //     console.log(`Nova luta: ${lutador1.nome} vs ${lutador2.nome}`);
  
  //     // Atualize o status dos lutadores para true
  //     lutador1.status = true;
  //     lutador2.status = true;
  //   }
  // }
  
  // // Função auxiliar para pegar um lutador aleatório
  // function getRandomLutador(lutadores: Lutador[]): Lutador {
  //   const randomIndex = Math.floor(Math.random() * lutadores.length);
  //   return lutadores.splice(randomIndex, 1)[0];
  // }
  
  // // Exemplo de uso
  // criarLutasAleatorias(treinadores, lutadores);

   
}


