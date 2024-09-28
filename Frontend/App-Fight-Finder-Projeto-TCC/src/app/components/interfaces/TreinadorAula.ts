import { Aula } from './Aula';
import { Treinador } from './Treinador';


export interface TreinadorAula{
    id: number | undefined; 
    presente: boolean; 
    treinador: Treinador; 
    aulaTreinador: Aula | undefined; 
}

