import { Aula } from './aula';
import { Treinador } from './treinador';


export interface TreinadorAula{
    id: number; 
    presente: boolean; 
    treinador: Treinador; 
    aulaTreinador: Aula; 
}

