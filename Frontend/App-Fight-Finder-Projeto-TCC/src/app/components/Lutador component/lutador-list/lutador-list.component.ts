import { Component, Input, OnInit, } from '@angular/core';
import { Lutador } from '../../interfaces/Lutador';
import { Output, EventEmitter } from '@angular/core';
import { LutadorService } from '../../../servicos/lutador.service';


@Component({
  selector: 'app-lutador-list',
  templateUrl: './lutador-list.component.html',
  styleUrl: './lutador-list.component.css'
})
export class LutadorListComponent implements OnInit {

  lutadores: Lutador[] = [];
  lutadoresFiltro: Lutador[] = [];
  listaLutadoresInicial: Lutador[] = this.lutadores;
  filtroSelecionado: string = '';



  constructor(private lutadorService: LutadorService) { };

  ngOnInit(): void {
    this.carregarLutadores();
  }

  carregarLutadores(): void {
    this.lutadorService.findAll().subscribe(data => {
      this.lutadores = data;
      this.listaLutadoresInicial = data; // Atualize listaLutadoresInicial com os dados recebidos
    });
  }
  

  delete(id: number): void {
    this.lutadorService.delete(id).subscribe(() => {
      this.carregarLutadores();
    })
  }

  confirmDelete(lutadorId: number) {
    const confirmResult = confirm('Tem certeza de que deseja excluir este Lutador?');
    if (confirmResult) {
      this.delete(lutadorId);
    }
  }

  inativarTreinador(lutadorId: number) {
    this.lutadorService.findById(lutadorId).subscribe((lutador) => {
      if (lutador.ativo == false) {
        lutador.ativo = true;
      } else {
        lutador.ativo = false;
      }

      this.lutadorService.update(lutador).subscribe(() => {

      });
    });
  }

  

  filtrarLutadores() {
    if (this.filtroSelecionado === 'preta') {
      this.lutadores = this.listaLutadoresInicial.filter(lutador => lutador.isColorida === false);
      console.log('Lutadores filtrados (preta):', this.lutadores);
  
    } else if (this.filtroSelecionado === 'colorida') {
      this.lutadores = this.listaLutadoresInicial.filter(lutador => lutador.isColorida === true);
      console.log('Lutadores filtrados (colorida):', this.lutadores);
  
    } else if (this.filtroSelecionado === 'ativos') {
      this.lutadores = this.listaLutadoresInicial.filter(lutador => lutador.ativo === true);
      console.log('Lutadores filtrados (ativos):', this.lutadores);
  
    } else if (this.filtroSelecionado === 'inativos') {
      this.lutadores = this.listaLutadoresInicial.filter(lutador => lutador.ativo === false);
      console.log('Lutadores filtrados (inativos):', this.lutadores);
  
    } else if (this.filtroSelecionado === 'feminino') {
      this.lutadores = this.listaLutadoresInicial.filter(lutador => lutador.genero === 'feminino');
      console.log('Lutadores filtrados (feminino):', this.lutadores);
  
    } else if (this.filtroSelecionado === 'masculino') {
      this.lutadores = this.listaLutadoresInicial.filter(lutador => lutador.genero === 'masculino');
      console.log('Lutadores filtrados (masculino):', this.lutadores);
  
    } else if (this.filtroSelecionado === 'todos') {
      this.lutadores = this.listaLutadoresInicial;
      console.log('Exibindo todos os lutadores:', this.lutadores);
  
    } else {
      this.lutadores = this.listaLutadoresInicial;
      console.log('Exibindo todos os lutadores (default):', this.lutadores);
    }
  }
  
  
}
