import { Component, Input } from '@angular/core';
import { Luta } from '../../interfaces/Luta';
import { LutaService } from '../../../servicos/luta.service';
import { Router } from '@angular/router';
import { TreinadorComponent } from '../../Treinador component/treinador/treinador.component';
import { Treinador } from '../../interfaces/Treinador';
import { Lutador } from '../../interfaces/Lutador';

@Component({
  selector: 'app-gerar-luta',
  templateUrl: './gerar-luta.component.html',
  styleUrl: './gerar-luta.component.css'
})
export class GerarLutaComponent {

  @Input() luta!: Luta;  
  lutaEditada!:Luta; 
  treinador!: Treinador; 
  lutador!: Lutador;

  constructor(
    private lutaService: LutaService, 
    private router: Router
  ){} 
  
  limparLuta():void {
  this.lutaEditada={
    id:0,
    rodada: 0, 
    status:false, 
    treinador: this.treinador, 
    lutador1: this.lutador, 
    lutador2: this.lutador,
    totalLutas: 0
  }
  this.luta={
    id:0,
    rodada: 0, 
    status:false, 
    treinador: this.treinador, 
    lutador1: this.lutador, 
    lutador2: this.lutador,
    totalLutas: 0
  }
  
  }
  
  ngOnInit():void{ 
  this.limparLuta();
  }
  
  ngOnChanges(): void{
    if (this.luta !=null ){
    
    this.lutaEditada={
  
    id:this.luta.id, 
    rodada: this.luta.rodada,
    status: this.luta.status,
    treinador: this.luta.treinador,
    lutador1: this.luta.lutador1,
    lutador2:this.luta.lutador2,
    totalLutas:this.luta.totalLutas
      }; 
    } else {
      this.limparLuta(); 
    }
    }
         
  
  salvarDados(): void{
  
  this.lutaService.add(this.luta).subscribe(() => {
    this.router.navigate(['/menuInicial']);
  });
  }
  
  
  cancelar(): void {
    this.limparLuta();
  }
}
