import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aula } from '../../interfaces/Aula';
import { ActivatedRoute, Router } from '@angular/router';
import { AulaService } from '../../../servicos/aula.service';
import { Treinador } from '../../interfaces/Treinador';
import { Lutador } from '../../interfaces/Lutador';
import { LutadorAula } from '../../interfaces/LutadorAula';
import { TreinadorAula } from '../../interfaces/TreinadorAula';

@Component({
  selector: 'app-aula-edit',
  templateUrl: './aula-edit.component.html',
  styleUrl: './aula-edit.component.css'
})
export class AulaEditComponent {

  treinadores: Treinador[]=[]; 
  lutadores: Lutador[]=[]; 

  aula: Aula = {
    id: 1,
    data: new Date('2024-09-07T10:00:00'), 
    treinadores: [],
    lutadores: [], 
    hora: ''
  }; 
  lutadoresAula: LutadorAula[]=[];
  isPresente: Boolean=true;
  treinadoresAula:TreinadorAula[]=[]; 
  lutadoresSelecionados: number[] = []; // IDs dos lutadores selecionados
  treinadoresSelecionados: number[] = []; // IDs dos lutadores selecionados
  
  
  constructor(
    private aulaService: AulaService, 
    private route: ActivatedRoute, 
    private router: Router
  ){}

  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id')); 
    if (id && id !=0){
      this.aulaService.findById(id).subscribe(data=> {
        this.aula=data; 
      }); 
    }
  }
  
  salvar(): void {
    this.aulaService.update(this.aula).subscribe(() => {
      this.router.navigate(['/aula']); 
    });
  }

  carregarLutadores(){
    this.lutadoresAula = this.aula.lutadores;

    if(this.isPresente) {
      this.lutadoresAula = this.lutadoresAula.filter(lutador => {
        return lutador.presente == true;
      });
    } else {
      this.lutadoresAula = this.lutadoresAula.filter(lutador => {
        return lutador.presente == false;
      });
    }
  }

  carregarTreinadores(){
    this.treinadoresAula = this.aula.treinadores;
    
    if(this.isPresente) {
      this.treinadoresAula = this.treinadoresAula.filter(treinador => {
        return treinador.presente == true;
      });
    } else {
      this.treinadoresAula = this.treinadoresAula.filter(treinador => {
        return treinador.presente == false;
      });
    }
  }

  toggleListas() {
    this.isPresente = !this.isPresente;
    this.carregarLutadores();
    this.carregarTreinadores();
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
}
