import { Aula } from './Aula';
import { Lutador } from './Lutador';


export interface LutadorAula{
    id: number; 
    presente: boolean; 
    lutador: Lutador; 
    aulaLutador: Aula; 
}

