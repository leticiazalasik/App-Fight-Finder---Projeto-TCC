import { Component, Input } from '@angular/core';
import { Luta } from '../../interfaces/Luta';
import { LutaService } from '../../../servicos/luta.service';
import { Router } from '@angular/router';
import { TreinadorComponent } from '../../Treinador component/treinador/treinador.component';
import { Treinador } from '../../interfaces/Treinador';
import { Lutador } from '../../interfaces/Lutador';

@Component({
  selector: 'app-gerar-luta',
  templateUrl: './gerar-luta.component.html',
  styleUrl: './gerar-luta.component.css'
})
export class GerarLutaComponent {
listaTreinadores!: Treinador[];
listaFiltradaLutadores!: Lutador[];
  aulaService: any;
  aula: any;
  aulasAtivas: any;
  aulaAtiva: any;

  constructor(
    private lutaService: LutaService, 
    private router: Router
  ){}

  @Input() luta: Luta | null = null; 
  exibirFormulario: string | undefined;

treinador!: Treinador;
lutador1!: Lutador; 
lutador2!:Lutador; 
treinadoresPresentes!: Treinador[]; 
lutadoresPresentes!: Lutador[]; 
isGenero!: Boolean; 
idade!: number; 
faixa!:Boolean; 

treinadores!: Treinador; 
lutadores!: Lutador; 

listaLutadores:Lutador[]=[];

  filtroSelecionado: string = '';
  lutadoresSelecionados: number[] = []; // IDs dos lutadores selecionados

  


  lutaEditada!: Luta; 
  limparLuta():void {
    this.lutaEditada={
      id: 0,
      rodada: 0,
      status: false,
      treinador: this.treinador,
      lutador1: this.lutador1,
      lutador2: this.lutador1, 
      totalLutas: 0
    }
  }
  
  
  ngOnChanges(): void{
    if (this.treinador !=null ){
    
      this.lutaEditada={
        id: this.lutaEditada.id,
        rodada: this.lutaEditada.rodada,
        status: this.lutaEditada.status,
        treinador: this.lutaEditada.treinador,
        lutador1: this.lutaEditada.lutador1,
        lutador2: this.lutaEditada.lutador2,
        totalLutas: this.lutaEditada.totalLutas
      }; 
    } else {
      this.limparLuta(); 
    }
    }
  
    ngOnInit():void{ 
      this.limparLuta();
      }
  
  salvarDados(): void{
    this.lutaService.add(this.lutaEditada).subscribe(() => {
      this.router.navigate(['/menuInicial']);
    });
  }
  
  
  cancelar(): void {
    this.limparLuta();
  }
  
  onLutadorChange(lutador: Lutador, event: any) {
    if (event.target.checked) {
      this.lutadoresSelecionados.push(lutador.id);
    } else {
      this.lutadoresSelecionados = this.lutadoresSelecionados.filter(id => id !== lutador.id);
    }
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
  
}
