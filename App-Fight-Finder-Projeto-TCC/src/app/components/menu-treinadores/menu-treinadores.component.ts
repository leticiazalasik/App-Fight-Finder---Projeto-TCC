import { Component, EventEmitter, Output } from '@angular/core';
import { Treinador } from '../../interfaces/Treinador';

@Component({
  selector: 'app-menu-treinadores',
  templateUrl: './menu-treinadores.component.html',
  styleUrl: './menu-treinadores.component.css'
})
export class MenuTreinadoresComponent {
  listatreinadores: Treinador[] = [
    {
      id: 1,
      nome: 'Antonio Valindolfo',
    idade: 40,
    modalidade: 'Taekwondo',
    ativo: true,
    foto: 'assets/img/perfil.png',
    
    }
  ];

  listaTreinadoresFiltro: Treinador[]= this.listatreinadores; 

  filtrarTreinadores(status:boolean):void{ 
    //opção usando Filter
    this.listaTreinadoresFiltro=this.listatreinadores.filter(treinador=>{
      return treinador.ativo==status; 
    }); 

   }

  exibirTodos():void{
    this.listaTreinadoresFiltro=this.listatreinadores;
  }

  onExcluir(id:number):void {
   const indexTreinador = this.listatreinadores.findIndex( treinador =>{
return treinador.id === id; 
  });
   if (indexTreinador>=0){
    this.listatreinadores.splice(indexTreinador,1)
   }
  }
  
  onEditar(treinadorEditado:Treinador): void{
const indexTreinador = this.listatreinadores.findIndex( treinador =>{
return treinador.id===treinadorEditado.id;
});
if (indexTreinador>=0){
  this.listatreinadores.splice(indexTreinador,1, treinadorEditado);
} else {
  alert(`Treinador não encontrado para id ${treinadorEditado.id}`)
}
  }

  

  onInserir(novoTreinador:Treinador): void{
novoTreinador.foto="assets/img/perfil.png";
novoTreinador.id=this.obterId();
this.listatreinadores.push(novoTreinador);
  }

  obterId():number{
    let ultimoTreinadorCadastrado:Treinador; 
    if(this.listatreinadores.length>0) {
      ultimoTreinadorCadastrado=this.listatreinadores[this.listatreinadores.length-1];
      return ultimoTreinadorCadastrado.id+1; 
    }

    return 1; 
      }

      OnInativar(treinador: Treinador): void {
        treinador.ativo = false;
    }

    @Output() telaLutadores : EventEmitter<string> = new EventEmitter<string>();

    tela(tela: string) {
      this.telaLutadores.emit(tela);
      if (tela=='editarTreinadores'){ 
          this.listaTreinadoresFiltro=this.listatreinadores; 
        }
    }
}
