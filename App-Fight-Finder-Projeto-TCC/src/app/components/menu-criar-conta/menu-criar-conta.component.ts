import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-criar-conta',
  templateUrl: './menu-criar-conta.component.html',
  styleUrl: './menu-criar-conta.component.css'
})
export class MenuCriarContaComponent {

  exibirFormularioEscola = false;

// Função para alternar a exibição do formulário
alternarExibicaoFormulario() {
  this.exibirFormularioEscola = !this.exibirFormularioEscola;
}
}
