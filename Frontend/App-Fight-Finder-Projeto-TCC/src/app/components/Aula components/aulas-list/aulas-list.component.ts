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

  
}
