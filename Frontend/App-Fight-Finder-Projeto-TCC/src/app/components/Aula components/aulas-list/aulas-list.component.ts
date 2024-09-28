import { Component } from '@angular/core';
import { Aula } from '../../interfaces/Aula';
import { AulaService } from '../../../servicos/aula.service';

@Component({
  selector: 'app-aulas-list',
  templateUrl: './aulas-list.component.html',
  styleUrl: './aulas-list.component.css'
})
export class AulasListComponent {

  aulas: Aula[]=[]; 
  aulasFiltro: Aula[] = [];
  filtroSelecionado: string="";
  listaAulasInicial: Aula[]=[];
  
  constructor(private aulaService: AulaService){}; 

  ngOnInit():void{
    this.carregarAulas();
  }
 
  carregarAulas(): void {
    this.aulaService.findAll().subscribe(data => {
      // Ordenar as aulas pela data mais recente para a mais antiga
      this.aulas = data.sort((a: Aula, b: Aula) => {
        const dataA = new Date(a.data).getTime();
        const dataB = new Date(b.data).getTime();
        return dataB - dataA; // Ordena de forma decrescente (mais recente para mais antiga)
      });
      
      // Atualize a listaAulasInicial com os dados recebidos e ordenados
      this.listaAulasInicial = this.aulas;
    });
  }
  
  
  
  delete(id:number):void{
    this.aulaService.delete(id).subscribe(()=>{
      this.carregarAulas(); 
    })
  }

  confirmDelete(aulaId: number) {
    const confirmResult = confirm('Tem certeza de que deseja excluir este treinador?');
    if (confirmResult) {
      this.delete(aulaId); 
    }
  }

  filtrarAulas() {
    const dataAtual = new Date(); // Data atual
    const anoAtual = dataAtual.getFullYear(); // Obtém o ano atual
    const mesAtual = dataAtual.getMonth(); // Obtém o mês atual (0-11)
  
    if (this.filtroSelecionado === 'ano') {
      // Retorna todas as aulas do ano atual
      this.aulas = this.listaAulasInicial.filter(aula => {
        const dataAula = new Date(aula.data); // Converte a data da aula para objeto Date
        return dataAula.getFullYear() === anoAtual; // Filtra apenas pelo ano atual
      });
  
    } else if (this.filtroSelecionado === 'mes') {
      // Retorna todas as aulas do mês atual
      this.aulas = this.listaAulasInicial.filter(aula => {
        const dataAula = new Date(aula.data); // Converte a data da aula para objeto Date
        return dataAula.getFullYear() === anoAtual && dataAula.getMonth() === mesAtual; // Filtra pelo mês atual
      });
  
    } else if (this.filtroSelecionado === 'todas') {
      this.aulas = this.listaAulasInicial;
  
    } else {
      this.aulas = this.listaAulasInicial; // Retorna todas as aulas se nenhuma opção for selecionada
    }
  }
  
  
}
