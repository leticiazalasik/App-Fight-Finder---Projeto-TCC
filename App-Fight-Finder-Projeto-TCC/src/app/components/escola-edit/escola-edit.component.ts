import { Component } from '@angular/core';

@Component({
  selector: 'app-escola-edit',
  templateUrl: './escola-edit.component.html',
  styleUrl: './escola-edit.component.css'
})
export class EscolaEditComponent {

  mostrarFormulario = false;

  onClickEditarPerfil() {
    this.mostrarFormulario = !this.mostrarFormulario;
    console.log('Valor de mostrarFormulario:', this.mostrarFormulario);
}

excluirConta() {
  const confirmacao = confirm("Tem certeza de que deseja excluir sua conta permanentemente?\n \n Você irá perder todos os seus dados registrados.");
  if (confirmacao) {
      // Lógica para excluir a conta
      alert("Conta excluída com sucesso!");
 
  }
}


}
