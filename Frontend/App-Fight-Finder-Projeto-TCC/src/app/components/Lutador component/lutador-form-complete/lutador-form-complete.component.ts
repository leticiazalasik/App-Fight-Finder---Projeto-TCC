import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lutador } from '../../interfaces/Lutador';
import { LutadorService } from '../../../servicos/lutador.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lutador-form-complete',
  templateUrl: './lutador-form-complete.component.html',
  styleUrl: './lutador-form-complete.component.css'
})
export class LutadorFormCompleteComponent {

lutador: Lutador = {
    id: 0,
    nome: '',
    idade: 0,
    isColorida: false,
    modalidade: '',
    altura: 0,
    peso: 0,
    genero: '',
    ativo: false,
    foto: '',
    comentarios: [],
    vitorias: 0, 
    empates: 0,
    derrotas: 0,
    observacoes: '', 
    turma: ''
  }

  constructor(
    private lutadorService: LutadorService, 
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id')); 
    if (id){
      this.lutadorService.findById(id).subscribe(data=> {
        this.lutador=data; 
      });
    }
  }

  inativarLutador(lutadorId: number) {
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

salvar(): void {
    this.lutadorService.update(this.lutador).subscribe(() => {
      this.router.navigate(['/lutador']); 
    });
  }
 


}
