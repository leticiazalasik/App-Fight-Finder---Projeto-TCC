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


  constructor(
    private treinadorService: TreinadorService,
    private router: Router
  ) { }

  @Input() treinador: Treinador | null = null;
  exibirFormulario: string | undefined;
  formularioValido: boolean = true;


  treinadorEditado!: Treinador;
  limparTreinador(): void {
    this.treinadorEditado = {
      id: 0,
      nome: '',
      idade: null,
      modalidade: '',
      ativo: false,
      foto: '',
    }
  }


  ngOnChanges(): void {
    if (this.treinador != null) {

      this.treinadorEditado = {
        id: this.treinadorEditado.id,
        nome: this.treinadorEditado.nome,
        idade: this.treinadorEditado.idade,
        modalidade: this.treinadorEditado.modalidade,
        ativo: this.treinadorEditado.ativo,
        foto: this.treinadorEditado.foto
      };
    } else {
      this.limparTreinador();
    }
  }

  ngOnInit(): void {
    this.limparTreinador();
  }

  salvarDados(): void {
    this.validarFormulario();
    if (this.formularioValido == true) {
      this.treinadorService.add(this.treinadorEditado).subscribe(() => {
        this.router.navigate(['/menuInicial']);
      });
    }
  }

    cancelar(): void {
      this.limparTreinador();
    }


    novoLutador(novoLutador: Lutador): void {
      this.exibirFormulario = 'novo';

    }

    validarFormulario(){
      if (this.treinadorEditado.idade == null) {
        this.formularioValido = false;
      }
    }

  }

