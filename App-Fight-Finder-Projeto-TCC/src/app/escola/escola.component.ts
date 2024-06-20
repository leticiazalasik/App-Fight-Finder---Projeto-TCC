import { Component, Inject, Input } from '@angular/core';


@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrl: './escola.component.css'
})
export class Escola {

  // escola.model.ts

  id: number;
  nome: string;
  email: string;
  senha: string;
  foto: string;
  treinadores: string;
  alunos: string;
  aulas: number;

      constructor( @Inject(Number) id: number, nome: string, email:string, senha:string, foto:string, treinadores: string, alunos: string, aulas:number) {
        this.id = id;
        this.nome = nome;
        this.email=email;
        this.senha=senha;
        this.foto=foto;
        this.treinadores = treinadores;
        this.alunos = alunos;
        this.aulas=aulas; 
    }
}

@Component({
    selector: 'app-escola',
    templateUrl: './escola.component.html',
    styleUrls: ['./escola.component.css']
})
export class EscolaComponent {
    @Input() escola!: Escola;

    // Restante do código do componente
}



