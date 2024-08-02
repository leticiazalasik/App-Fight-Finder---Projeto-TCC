import { Component, EventEmitter, Output } from '@angular/core';
import { Treinador } from '../../interfaces/Treinador';

@Component({
  selector: 'app-tela-treinadores',
  templateUrl: './tela-treinadores.component.html',
  styleUrl: './tela-treinadores.component.css'
})
export class TelaTreinadoresComponent {

  @Output() editar: EventEmitter<Treinador>=new EventEmitter(); 

  @Output() inserir: EventEmitter<Treinador>=new EventEmitter();

  @Output() salvar: EventEmitter<Treinador>=new EventEmitter();

  
  listaTreinadores: Treinador[] = [
    {
      id: 1,
      nome: 'Antonio Valindolfo',
    idade: 38,
    modalidade: 'Taekwondo',
    ativo: true,
    foto: 'assets/img/perfil.png',
    
    }
  ];

  listaTreinadoresFiltro: Treinador[]= this.listaTreinadores; 

  filtrarTreinadores(status:boolean):void{ 
    //opção usando Filter
    this.listaTreinadoresFiltro=this.listaTreinadores.filter(treinador=>{
      return treinador.ativo==status; 
    }); 

   }

  exibirTodos():void{
    this.listaTreinadoresFiltro=this.listaTreinadores;
  }

  onExcluir(id:number):void {
   const indexTreinador = this.listaTreinadores.findIndex( treinadores =>{
return treinadores.id === id; 
  });
   if (indexTreinador>=0){
    this.listaTreinadores.splice(indexTreinador,1)
   }
  }
  
  onEditar(treinadorEditado:Treinador): void{
const indexTreinador = this.listaTreinadores.findIndex( treinador =>{
return treinador.id===treinadorEditado.id;
});
if (indexTreinador>=0){
  this.listaTreinadores.splice(indexTreinador,1, treinadorEditado);
} else {
  alert(`Treinador não encontrado para id ${treinadorEditado.id}`)
}
  }
      telaTreinadores: string='';

    novaTelaTreinadores(tela: string) {
        this.telaTreinadores = tela;
        if (tela=='editarTreinadores'){ 
          this.listaTreinadoresFiltro=this.listaTreinadores; 
        }
    }

    OnInativar(treinador: Treinador): void {
      treinador.ativo = false;
  }

  treinadorEditar:Treinador|null=null;

  exibirFormulario: string=''; 

  
  onInserir(novoTreinador:Treinador): void{
    novoTreinador.foto="assets/img/perfil.png";
    novoTreinador.id=this.obterId();
    this.listaTreinadores.push(novoTreinador);
      }
    
      obterId():number{
        let ultimoTreinadorCadastrado:Treinador; 
        if(this.listaTreinadores.length>0) {
          ultimoTreinadorCadastrado=this.listaTreinadores[this.listaTreinadores.length-1];
          return ultimoTreinadorCadastrado.id+1; 
        }
    
        return 1; 
          }
    
  novoTreinador(): void {
    this.exibirFormulario='novo';
    this.treinadorEditar=null;
  }
  onSalvar(treinador:Treinador): void {
    this.exibirFormulario=' '; 
    if (treinador.id!=0){
    this.editar.emit(treinador);
    } else {
    this.inserir.emit(treinador); 
    }
  }

}
