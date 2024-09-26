import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Escola } from '../../interfaces/Escola';
import { EscolaService } from '../../../servicos/escola.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escola-form',
  templateUrl: './escola-form.component.html',
  styleUrl: './escola-form.component.css'
})
export class EscolaFormComponent {

  inserir: any;
  exibirFormulario: string | undefined;


  @Input() escola!: Escola;  
  @Output() salvar: EventEmitter<any> = new EventEmitter<any>(); 
@Output() editar: EventEmitter<any> = new EventEmitter<any>(); 

constructor(
  private escolaService: EscolaService, 
  private router: Router
){}

escolaEditada!:Escola; 

limparEscola():void {
this.escolaEditada={
  id:0,
  nome: ' ', 
  email:' ', 
  senha:' ', 
  foto:' ', 
  senhaTemporaria: false
}
this.escola={
  id:0,
  nome: ' ', 
  email:' ', 
  senha:' ', 
  foto:' ', 
  senhaTemporaria: false
}

}

ngOnInit():void{ 
this.limparEscola();
}

ngOnChanges(): void{
  if (this.escola !=null ){
  
  this.escolaEditada={

  id:this.escola.id, 
  nome: this.escola.nome,
  email: this.escola.email,
  senha: this.escola.senha,
  foto: this.escola.foto,
  senhaTemporaria:this.escola.senhaTemporaria
    }; 
    console.log(this.escola.foto);
  } else {
    this.limparEscola(); 
  }
  }
       

salvarDados(): void{

this.escolaService.add(this.escola).subscribe(() => {
  this.router.navigate(['/menuInicial']);
});
}


cancelar(): void {
  this.limparEscola();
}



} 
