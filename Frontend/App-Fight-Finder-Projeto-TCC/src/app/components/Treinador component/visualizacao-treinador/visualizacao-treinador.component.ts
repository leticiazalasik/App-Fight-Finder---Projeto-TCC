import { Component } from '@angular/core';
import { TreinadorService } from '../../../servicos/treinador.service';
import { ActivatedRoute } from '@angular/router';
import { Treinador } from '../../interfaces/Treinador';

@Component({
  selector: 'app-visualizacao-treinador',
  templateUrl: './visualizacao-treinador.component.html',
  styleUrl: './visualizacao-treinador.component.css'
})
export class VisualizacaoTreinadorComponent {

  treinador!: Treinador; 

  treinadoresAula: Treinador[]=[];

  constructor(
    private treinadorService: TreinadorService, 
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id')); 
    if (id){
      this.treinadorService.findById(id).subscribe(data=> {
        this.treinador=data; 
      });
    }
  }
}
