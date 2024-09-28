import { Aula } from './Aula';
import { Lutador } from './Lutador';


export interface LutadorAula{
    id: number | undefined; 
    presente: boolean; 
    lutador: Lutador; 
    aulaLutador: Aula | undefined; 
}

