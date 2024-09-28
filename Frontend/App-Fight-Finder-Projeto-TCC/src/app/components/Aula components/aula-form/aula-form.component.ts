import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aula } from '../../interfaces/Aula';
import { ActivatedRoute, Router } from '@angular/router';
import { AulaService } from '../../../servicos/aula.service';
import { Lutador } from '../../interfaces/Lutador';
import { Treinador } from '../../interfaces/Treinador';
import { LutadorService } from '../../../servicos/lutador.service';
import { TreinadorService } from '../../../servicos/treinador.service';
import { LutadorAula } from '../../interfaces/LutadorAula';
import { TreinadorAula } from '../../interfaces/TreinadorAula';

@Component({
  selector: 'app-aula-form',
  templateUrl: './aula-form.component.html',
  styleUrl: './aula-form.component.css'
})
export class AulaFormComponent {

  listaLutadores: Lutador[] = [];
  listaTreinadores: Treinador[] = [];

  listaLutadorAula: LutadorAula[] = [];
  listaTreinadorAula: TreinadorAula[] = [];


  filtroSelecionado: string = '';
  listaFiltradaLutadores: any[] = []; // Lista filtrada


  lutadoresPresentes: any[] = [];  // Lista de lutadores presentes
  lutadoresSelecionados: number[] = []; // IDs dos lutadores selecionados
  treinadoresSelecionados: number[] = []; // IDs dos lutadores selecionados
  listaLutadorAulaInicial:LutadorAula[]=this.listaLutadorAula;


  aula: Aula = {
    id: 1,
    data: new Date(),
    treinadores: [],
    lutadores: [],
    hora: ''
  };

  isEdicao: boolean = false;
  lutadores: any;
  listaFiltradaTreinadores: Treinador[] | undefined;

  constructor(
    private aulaService: AulaService,
    private route: ActivatedRoute,
    private router: Router,
    private lutadorService: LutadorService,
    private treinadorService: TreinadorService
  ) { }


  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id && id != 0) {
      this.isEdicao = true;
      this.aulaService.findById(id).subscribe(data => {
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
  }

  salvar(): void {
    // Criar uma cópia da aula para remover a referência circular
    const aulaParaSalvar = {
      ...this.aula,
      lutadores: this.listaLutadorAula.map(lutadorAula => ({
        ...lutadorAula,
        aulaLutador: undefined // Remove a referência circular
      })),
      treinadores: this.listaTreinadorAula.map(treinadorAula => ({
        ...treinadorAula,
        aulaTreinador: undefined // Remove a referência circular
      }))
    };
  
    this.aulaService.add(aulaParaSalvar).subscribe(() => {
      this.router.navigate(['/aula']);
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

  filtrarLutadoresAula() {
    if (this.filtroSelecionado === 'alunosDaTurma') {
      // Filtrar diretamente os LutadorAula onde o lutador pertence à turma com a mesma hora da aula
      this.listaLutadorAula = this.listaLutadorAulaInicial.filter(lutadorAula => lutadorAula.lutador.turma === this.aula.hora);
  
      // Atualizar a lista de IDs de lutadores selecionados com base nos LutadorAula filtrados
      this.lutadoresSelecionados = this.listaLutadorAula.map(lutadorAula => lutadorAula.lutador.id);
  
    } else if (this.filtroSelecionado === 'todosLutadoresAtivos') {
      // Filtrar os LutadorAula onde o lutador está ativo
      this.listaLutadorAula = this.listaLutadorAulaInicial.filter(lutadorAula => lutadorAula.lutador.ativo === true);
  
    } else {
      // Retornar todos os LutadorAula se não houver filtro específico (reseta a lista)
      this.listaLutadorAula = [...this.listaLutadores.map(lutador => ({
        id: undefined, 
        presente: true, // ou outra lógica de inicialização
        lutador: lutador,
        aulaLutador: this.aula
      }))];
    }
  }
  
  criarListaLutadorAula(listaLutadores:Lutador[]){
    listaLutadores.forEach(lutador => {
      const LutadorAula:LutadorAula={
        id: undefined,
        presente: true,
        lutador: lutador,
        aulaLutador: undefined
      }; 
     this.listaLutadorAula.push(LutadorAula); 

    });
  }

  criarListaTreinadorAula(listaTreinadores:Treinador[]){
    listaTreinadores.forEach(treinador => {
      const TreinadorAula:TreinadorAula={
        id: undefined,
        presente: true,
        treinador: treinador,
        aulaTreinador: undefined
      }; 
     this.listaTreinadorAula.push(TreinadorAula); 

    });
  }

  obterLutadores(lutadorAula: LutadorAula[]): Lutador[] {
    // Mapeie a lista de LutadorAula para obter os lutadores
    const listaDeLutadores = lutadorAula.map(la => la.lutador);

    return listaDeLutadores;
}


}


