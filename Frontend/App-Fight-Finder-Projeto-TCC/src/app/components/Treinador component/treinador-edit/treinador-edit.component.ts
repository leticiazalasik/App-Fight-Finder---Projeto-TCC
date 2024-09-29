import { Component} from '@angular/core';
import { Treinador } from '../../interfaces/Treinador';
import { TreinadorService } from '../../../servicos/treinador.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-treinador-edit',
  templateUrl: './treinador-edit.component.html',
  styleUrl: './treinador-edit.component.css'
})
export class TreinadorEditComponent {

  treinador: Treinador = {
    id: 0, 
    nome: '',
    idade: 0,
    modalidade: '',
    foto: '',
    ativo: true
  }; 

  constructor(
    private treinadorService: TreinadorService, 
    private route: ActivatedRoute,
    private router: Router

  ){}

  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id')); 
    if (id){
      this.treinadorService.findById(id).subscribe(data=> {
        this.treinador=data; 
      });
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

salvar(): void {
    this.treinadorService.update(this.treinador).subscribe(() => {
      this.router.navigate(['/treinador']); 
    });
  }
 
}
