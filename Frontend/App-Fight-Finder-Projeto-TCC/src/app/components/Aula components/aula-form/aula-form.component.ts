import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aula } from '../../interfaces/Aula';
import { ActivatedRoute, Router } from '@angular/router';
import { AulaService } from '../../../servicos/aula.service';

@Component({
  selector: 'app-aula-form',
  templateUrl: './aula-form.component.html',
  styleUrl: './aula-form.component.css'
})
export class AulaFormComponent {
  
  aula: Aula = {
    id: 1,
    data: new Date('2024-09-07T10:00:00'), 
    treinadores: [],
    lutadores: []
  }; 
  
  isEdicao: boolean = false; 
  
  constructor(
    private aulaService: AulaService, 
    private route: ActivatedRoute, 
    private router: Router
  ){}
  
  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id')); 
    if (id && id !=0){
      this.isEdicao= true; 
      this.aulaService.findById(id).subscribe(data => {
        this.aula = data; 
      }); 
    }
  }
  
  salvar(): void {
      this.aulaService.add(this.aula).subscribe(() => {
        this.router.navigate(['/aula']);
      })
    }
    
    
    } 
