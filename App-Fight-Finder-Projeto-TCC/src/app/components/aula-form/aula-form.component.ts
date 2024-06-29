import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aula } from '../../interfaces/Aula';

@Component({
  selector: 'app-aula-form',
  templateUrl: './aula-form.component.html',
  styleUrl: './aula-form.component.css'
})
export class AulaFormComponent {
  @Input() aula: Aula | null = null; 

  @Output() salvar: EventEmitter<any> = new EventEmitter<any>(); 
  @Output() editar: EventEmitter<any> = new EventEmitter<any>(); 
  
  inserir: any;
  exibirFormulario: string | undefined;

  aulaEditada!: Aula; 
  limparAula():void {
    this.aulaEditada={
      id: 0,
      data: new Date(0, 0, 0),
      lutadoresPresentes: [],
      treinadoresPresentes: [], // Array de IDs de lutadores e treinadores
      lutadoresAusentes: [], // Array de IDs de lutadores e treinadores
      treinadoresAusentes: [4,5], // Array de IDs de lutadores e treinadores
      horario: '19:00',
    }
  }

  ngOnChanges(): void{
    if (this.aula !=null ){
    
      this.aulaEditada={
        id: this.aula.id,
        data: this.aula.data,
        lutadoresPresentes: this.aula.lutadoresPresentes,
        treinadoresPresentes: this.aula.treinadoresPresentes,
        lutadoresAusentes: this.aula.lutadoresAusentes,
        treinadoresAusentes: this.aula.treinadoresAusentes,
        horario: this.aula.horario,
      };
      this.limparAula(); 
    }
    }
  
    salvarDados(): void{
      this.salvar.emit(this.aulaEditada);
    }
    
    
    cancelar(): void {
      this.limparAula();
    }
    
    
    AdicionarDados(): void{
      this.editar.emit(this.aulaEditada);
    }
    
    novoLutador(novaAula: Aula): void {
      this.exibirFormulario='novo';
      
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
