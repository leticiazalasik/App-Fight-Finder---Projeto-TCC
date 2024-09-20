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
  
  constructor(private aulaService: AulaService){}; 

  ngOnInit():void{
    this.carregarAulas();
  }

  carregarAulas():void{
    this.aulaService.findAll().subscribe(data=> {
      this.aulas=data; 
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

  aulasDoMes(): void {
    const dataAtual = new Date(); // Obtém a data atual

    this.aulasFiltro = this.aulas.filter(aula => {
      const dataAula = new Date(aula.data);
      const anoDaAula = dataAula.getFullYear();
      const mesDaAula = dataAula.getMonth();
  
      // Verifica se o ano e o mês da aula correspondem ao ano e mês atuais
      return anoDaAula === dataAtual.getFullYear() && mesDaAula === dataAtual.getMonth();
    });

    this.aulas=this.aulasFiltro; 
}

aulasDoAno(): void {
  const anoAtual = new Date().getFullYear(); // Obtém o ano atual

  this.aulasFiltro = this.aulas.filter(aula => {
    const anoDaAula = new Date(aula.data).getFullYear();
    return anoDaAula === anoAtual;
  });
this.aulas=this.aulasFiltro; 
}
}
