import { Component } from '@angular/core';

@Component({
  selector: 'app-escola-edit',
  templateUrl: './escola-edit.component.html',
  styleUrl: './escola-edit.component.css'
})
export class EscolaEditComponent {

  exibirFormularioEscola = false;


  alternarExibicaoFormulario() {
    this.exibirFormularioEscola = !this.exibirFormularioEscola;
  }

excluirConta() {
  const confirmacao = confirm("Tem certeza de que deseja excluir sua conta permanentemente?\n \n Você irá perder todos os seus dados registrados.");
  if (confirmacao) {
      // Lógica para excluir a conta
      alert("Conta excluída com sucesso!");
 
  }
}


}
