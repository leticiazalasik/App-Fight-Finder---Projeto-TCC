import { Component } from '@angular/core';
import { Escola } from '../../interfaces/Escola';
import { EscolaService } from '../../../servicos/escola.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-escola-edit',
  templateUrl: './escola-edit.component.html',
  styleUrl: './escola-edit.component.css'
})
export class EscolaEditComponent {

  
  escola: Escola = {
    id: 0, 
    nome: '',
    email: '',
    senha: '',
    foto: '',
    ativo: true,
    senhaTemporaria: false, 
  }; 

  constructor(
    private escolaService: EscolaService, 
    private route: ActivatedRoute,
    private router: Router

  ){}

  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id')); 
    if (id){
      this.escolaService.findById(id).subscribe(data=> {
        this.escola=data; 
      });
    }
  }

  inativarEscola(escolaId: number) {
    this.escolaService.findById(escolaId).subscribe((escola) => {
      if (escola.ativo ==false) {
        escola.ativo=true;
      } else {
        escola.ativo=false;
      }

      this.escolaService.update(escola).subscribe(() => {

      });
    });
}

salvar(): void {
    this.escolaService.update(this.escola).subscribe(() => {
      this.router.navigate(['/escola']); 
    });
  }
 


}
