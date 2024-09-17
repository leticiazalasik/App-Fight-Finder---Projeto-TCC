import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lutador } from '../../interfaces/Lutador';
import { Treinador } from '../../interfaces/Treinador';
import { TreinadorService } from '../../../servicos/treinador.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-treinador-form',
  templateUrl: './treinador-form.component.html',
  styleUrl: './treinador-form.component.css'
})
export class TreinadorFormComponent {

treinador: Treinador = {
  id: 0, 
  nome: 'Valério Valindolfo',
  idade: 40,
  modalidade: 'taekwondo',
  foto: 'string',
  ativo: true
}; 

isEdicao: boolean = false; 

constructor(
  private treinadorService: TreinadorService, 
  private route: ActivatedRoute, 
  private router: Router
){}

ngOnInit(): void{
  const id = Number(this.route.snapshot.paramMap.get('id')); 
  if (id && id !=0){
    this.isEdicao= true; 
    this.treinadorService.findById(id).subscribe(data => {
      this.treinador = data; 
    }); 
  }
}

salvar(): void {
  if(this.isEdicao){
    this.treinadorService.update(this.treinador).subscribe(() => {
      this.router.navigate(['/treinador']); 
    }); 
  } else { 
    this.treinadorService.add(this.treinador).subscribe(() => {
      this.router.navigate(['/produtos']);
    })
  }
  }
}
