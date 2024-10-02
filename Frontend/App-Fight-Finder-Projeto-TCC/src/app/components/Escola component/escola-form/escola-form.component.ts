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
  formularioValido: boolean=false; 

constructor(
    private escolaService: EscolaService,
    private router: Router
  ) { }

  escolaEditada!: Escola;
  escola: Escola | null = null;


  limparEscola(): void {
    this.escolaEditada = {
      id: 0,
      nome: '',
      email: '',
      senha: '',
      senhaTemporaria: false,
      ativo: true,
      foto: ''
    }
  }


  ngOnChanges(): void {
    if (this.escola != null) {

      this.escolaEditada = {
        id: this.escolaEditada.id,
        nome: this.escolaEditada.nome,
        email: this.escolaEditada.email,
        senha: this.escolaEditada.senha,
        senhaTemporaria: this.escolaEditada.senhaTemporaria,
        ativo: this.escolaEditada.ativo,
        foto: this.escolaEditada.foto
      };
    } else {
      this.limparEscola();
    }
  }

  ngOnInit(): void {
    this.limparEscola();
  }

  salvarDados(): void {
    this.validarFormulario();
    if (this.formularioValido == true) {
      this.escolaService.add(this.escolaEditada).subscribe(() => {
        this.router.navigate(['/menuInicial']);
      });
    }
  }

    cancelar(): void {
      this.limparEscola();
    }

    validarFormulario(){
      if (this.escolaEditada.senha == '') {
        this.formularioValido = false;
      } else if (this.escolaEditada.senha == '') {
        this.formularioValido = false;
    } else if (this.escolaEditada.email == '') {
      this.formularioValido = false;
  }
} 

}