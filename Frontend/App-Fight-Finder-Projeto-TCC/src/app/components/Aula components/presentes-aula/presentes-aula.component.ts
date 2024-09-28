import { Component } from '@angular/core';
import { Lutador } from '../../interfaces/Lutador';
import { Treinador } from '../../interfaces/Treinador';
import { ActivatedRoute } from '@angular/router';
import { LutadorService } from '../../../servicos/lutador.service';

@Component({
  selector: 'app-presentes-aula',
  templateUrl: './presentes-aula.component.html',
  styleUrl: './presentes-aula.component.css'
})
export class PresentesAulaComponent {
  aulaId!: number;
  lutadores: any[] = [];
  treinadores: any[] = [];


  constructor(
    private route: ActivatedRoute,
    private alunosService: LutadorService
  ) {}

  ngOnInit(): void {
    this.aulaId = Number(this.route.snapshot.paramMap.get('id'));
    this.buscarPresentes(this.aulaId);
  }

  buscarPresentes(id: number): void {
    this.alunosService.getPresentesByAulaId(id).subscribe((data) => {
      this.lutadores = data;
    });
  }
}

