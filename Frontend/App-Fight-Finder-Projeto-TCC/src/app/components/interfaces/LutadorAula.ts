import { Aula } from './aula';
import { Lutador } from './lutador';


export interface LutadorAula{
    id: number; 
    presente: boolean; 
    lutador: Lutador; 
    aulaLutador: Aula; 
}

