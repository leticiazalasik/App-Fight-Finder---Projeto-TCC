import { Pessoa } from './Pessoa';
import { Aula } from './aula';

export interface Treinador extends Pessoa{
    id: number; 
    treinador: Treinador; 
    aulaTreinador: Aula; 
}
