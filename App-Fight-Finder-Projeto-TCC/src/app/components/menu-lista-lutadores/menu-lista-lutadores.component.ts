import { Component } from '@angular/core';
import { Lutador } from '../../interfaces/Lutador';

@Component({
  selector: 'app-menu-lista-lutadores',
  templateUrl: './menu-lista-lutadores.component.html',
  styleUrl: './menu-lista-lutadores.component.css'
})
export class MenuListaLutadoresComponent {
  listalutadores: Lutador[] = [
    {
      id: 1,
      nome: 'John Deik',
    idade: 31,
    modalidade: 'Taekwondo',
    nivel: 9,
    peso: 80,
    altura: 182,
    genero: 'masculino',
    ativo: true,
    foto: 'assets/img/perfil.png',
    
    }
  ];

  listaLutadoresFiltro: Lutador[]= this.listalutadores; 

  filtrarLutadores(status:boolean):void{ 
    //opção usando Filter
    this.listaLutadoresFiltro=this.listalutadores.filter(lutador=>{
      return lutador.ativo==status; 
    }); 

   }
   exibirTodos():void{
    this.listaLutadoresFiltro=this.listalutadores;
  }

  onExcluir(id:number):void {
   const indexLutador = this.listalutadores.findIndex( lutador =>{
return lutador.id === id; 
  });
   if (indexLutador>=0){
    this.listalutadores.splice(indexLutador,1)
   }
  }
  
  onEditar(lutadorEditado:Lutador): void{
const indexLutador = this.listalutadores.findIndex( lutador =>{
return lutador.id===lutadorEditado.id;
});
if (indexLutador>=0){
  this.listalutadores.splice(indexLutador,1, lutadorEditado);
} else {
  alert(`Lutador não encontrado para id ${lutadorEditado.id}`)
}
  }

  

  onInserir(novoLutador:Lutador): void{
novoLutador.foto="assets/img/perfil.png";
novoLutador.id=this.obterId();
this.listalutadores.push(novoLutador);
  }

  obterId():number{
    let ultimoLutadorCadastrado:Lutador; 
    if(this.listalutadores.length>0) {
      ultimoLutadorCadastrado=this.listalutadores[this.listalutadores.length-1];
      return ultimoLutadorCadastrado.id+1; 
    }

    return 1; 
      }
}
