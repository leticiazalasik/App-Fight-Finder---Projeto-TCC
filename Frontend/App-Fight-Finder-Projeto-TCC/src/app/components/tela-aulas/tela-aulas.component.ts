import { Component, EventEmitter, Output } from '@angular/core';
import { Aula } from '../../interfaces/Aula';

@Component({
  selector: 'app-tela-aulas',
  templateUrl: './tela-aulas.component.html',
  styleUrl: './tela-aulas.component.css'
})
export class TelaAulasComponent {

  @Output() editar: EventEmitter<Aula>=new EventEmitter(); 

  @Output() inserir: EventEmitter<Aula>=new EventEmitter();

  @Output() salvar: EventEmitter<Aula>=new EventEmitter();

  
  listaaulas: Aula[] = [
    {
      id: 1,
      data: new Date(0, 0, 0),
    horario: '19',
    lutadoresPresentes: [1],
    lutadoresAusentes: [],
    treinadoresPresentes: [1],
    treinadoresAusentes: [0],
    }
  ];

  listaAulasFiltro: Aula[]= this.listaaulas; 

  filtrarAulas(tela?: Boolean): void { 
    this.listaAulasFiltro = this.listaaulas;
    }

  exibirTodos():void{
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

  telaAulas: string='';

    novaTelaAulas(tela: string) {
        this.telaAulas= tela;
        if (tela=='editarLutadores'){ 
          this.listaAulasFiltro=this.listaaulas; 
        }
    }
  
  aulaEditar:Aula|null=null;

  exibirFormulario: string=''; 

  
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
    
  novaAula(): void {
    this.exibirFormulario='novo';
    this.aulaEditar=null;
  }
  onSalvar(aula:Aula): void {
    this.exibirFormulario=' '; 
    if (aula.id!=0){
    this.editar.emit(aula);
    } else {
    this.inserir.emit(aula); 
    }
  }
}

