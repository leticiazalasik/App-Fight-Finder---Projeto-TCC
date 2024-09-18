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
  
  constructor(private treinadorService: TreinadorService){}; 

  ngOnInit():void{
    this.carregarTreinadores();
  }

  carregarTreinadores():void{
    this.treinadorService.findAll().subscribe(data=> {
      this.treinadores=data; 
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

}
