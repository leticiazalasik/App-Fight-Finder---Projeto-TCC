import { Component } from '@angular/core';
import { Lutador } from '../../interfaces/Lutador';
import { Treinador } from '../../interfaces/Treinador';
import { ActivatedRoute } from '@angular/router';
import { LutadorService } from '../../../servicos/lutador.service';
import { AulaService } from '../../../servicos/aula.service';
import { LutadorAula } from '../../interfaces/LutadorAula';
import { TreinadorAula } from '../../interfaces/TreinadorAula';
import { Aula } from '../../interfaces/Aula';

@Component({
  selector: 'app-presentes-aula',
  templateUrl: './presentes-aula.component.html',
  styleUrl: './presentes-aula.component.css'
})
export class PresentesAulaComponent {

  aula!: Aula;
  lutadoresAula: LutadorAula[] = [];
  treinadoresAula: TreinadorAula[] = [];
  isPresente: boolean = true;


  constructor(
    private route: ActivatedRoute,
    private alunosService: LutadorService,
    private aulaService: AulaService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.buscarAula(id);
  }

  buscarAula(id: number){
    this.aulaService.findById(id).subscribe(aulaRetorno => {
      this.aula = aulaRetorno;
      this.carregarLutadores();
      this.carregarTreinadores();
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
}

