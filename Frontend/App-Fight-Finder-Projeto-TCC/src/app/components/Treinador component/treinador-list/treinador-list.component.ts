import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Treinador } from '../../interfaces/Treinador';
import { TreinadorService } from '../../../servicos/treinador.service';

@Component({
  selector: 'app-treinador-list',
  templateUrl: './treinador-list.component.html',
  styleUrl: './treinador-list.component.css'
})
export class TreinadorListComponent implements OnInit{

  treinadores: Treinador[]=[]; 
  treinadoresFiltro: Treinador[] = [];
  listaTreinadoresInicial: Treinador[]=[];
  filtroSelecionado: string='';
  
  constructor(private treinadorService: TreinadorService){}; 

  ngOnInit():void{
    this.carregarTreinadores();
  }

  
  carregarTreinadores(): void {
    this.treinadorService.findAll().subscribe(data => {
      this.treinadores = data;
      this.listaTreinadoresInicial = data; // Atualize listaLutadoresInicial com os dados recebidos
    });
  }

  delete(id:number):void{
    this.treinadorService.delete(id).subscribe(()=>{
      this.carregarTreinadores(); 
    })
  }

  confirmDelete(treinadorId: number) {
    const confirmResult = confirm('Tem certeza de que deseja excluir este treinador?');
    if (confirmResult) {
      this.delete(treinadorId); 
    }
  }

  inativarTreinador(treinadorId: number) {
    this.treinadorService.findById(treinadorId).subscribe((treinador) => {
      if (treinador.ativo ==false) {
        treinador.ativo=true;
      } else {
        treinador.ativo=false;
      }

      this.treinadorService.update(treinador).subscribe(() => {

      });
    });
}

filtrarTreinadores() {
  if (this.filtroSelecionado === 'ativos') {
    this.treinadores = this.listaTreinadoresInicial.filter(treinador => treinador.ativo === true);

  } else if (this.filtroSelecionado === 'inativos') {
    this.treinadores = this.listaTreinadoresInicial.filter(treinador => treinador.ativo === false);

  } else if (this.filtroSelecionado === 'todos') {
    this.treinadores = this.listaTreinadoresInicial;

  } else {
    this.treinadores = this.listaTreinadoresInicial;
  }
}


}

