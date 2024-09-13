import { Pessoa } from './Pessoa';
import { Aula } from './Aula';

export interface Treinador extends Pessoa{
    id: number; 
    treinador: Treinador; 
    aulaTreinador: Aula; 
}
