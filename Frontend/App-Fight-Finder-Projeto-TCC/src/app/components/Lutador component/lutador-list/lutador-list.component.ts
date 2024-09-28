import { Component, Input, OnInit, } from '@angular/core';
import { Lutador } from '../../interfaces/Lutador';
import { Output, EventEmitter } from '@angular/core';
import { LutadorService } from '../../../servicos/lutador.service';


@Component({
  selector: 'app-lutador-list',
  templateUrl: './lutador-list.component.html',
  styleUrl: './lutador-list.component.css'
})
export class LutadorListComponent implements OnInit{

  lutadores: Lutador[]=[]; 
  lutadoresFiltro: Lutador[] = [];
  
  constructor(private lutadorService: LutadorService){}; 

  ngOnInit():void{
    this.carregarLutadores();
  }

  carregarLutadores():void{
    this.lutadorService.findAll().subscribe(data=> {
      this.lutadores=data; 
    }); 
  }

  delete(id:number):void{
    this.lutadorService.delete(id).subscribe(()=>{
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
      if (lutador.ativo ==false) {
        lutador.ativo=true;
      } else {
        lutador.ativo=false;
      }

      this.lutadorService.update(lutador).subscribe(() => {

      });
    });
}

lutadoresAtivos(): void {
  this.lutadoresFiltro = this.lutadores.filter(lutador => lutador.ativo);
  this.lutadores=this.lutadoresFiltro; 

}
}
