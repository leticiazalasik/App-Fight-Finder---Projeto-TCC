import { Component, EventEmitter, Output } from '@angular/core';
import { Aula } from '../../interfaces/Aula';

@Component({
  selector: 'app-menu-aulas',
  templateUrl: './menu-aulas.component.html',
  styleUrl: './menu-aulas.component.css'
})
export class MenuAulasComponent {

  listaaulas: Aula[] = [
    {
      id: 1,
      data: new Date(2024, 7, 15),
       horario:"19",
      lutadoresPresentes: [1],
      treinadoresPresentes: [1],
      lutadoresAusentes: [],
      treinadoresAusentes: [],
    }
  ];

 
  listaAulasFiltro: Aula[]= this.listaaulas; 

  filtrarAulas(tela?: Boolean): void { 
    this.listaAulasFiltro = this.listaaulas;
    }

  exibirTodas():void{
    this.listaAulasFiltro=this.listaaulas;
  }

  onExcluir(id:number):void {
   const indexAula = this.listaaulas.findIndex( aula =>{
return aula.id === id; 
  });
   if (indexAula>=0){
    this.listaaulas.splice(indexAula,1)
   }
  }
  
  onEditar(aulaEditada:Aula): void{
const indexAula = this.listaaulas.findIndex( aula =>{
return aula.id===aulaEditada.id;
});
if (indexAula>=0){
  this.listaaulas.splice(indexAula,1, aulaEditada);
} else {
  alert(`Aula não encontrada para id ${aulaEditada.id}`)
}
  }

  onInserir(novaAula:Aula): void{
    novaAula.id=this.obterId();
    this.listaaulas.push(novaAula);
      }

      obterId():number{
        let ultimaAulaCadastrada:Aula; 
        if(this.listaaulas.length>0) {
          ultimaAulaCadastrada=this.listaaulas[this.listaaulas.length-1];
          return ultimaAulaCadastrada.id+1; 
        }
    
        return 1; 
          }

    
    @Output() telaAulas : EventEmitter<string> = new EventEmitter<string>();

          tela(tela: string) {
              this.telaAulas.emit(tela);
              if (tela=='editarAulas'){ 
                this.listaAulasFiltro=this.listaaulas; 
              }
          }
}
