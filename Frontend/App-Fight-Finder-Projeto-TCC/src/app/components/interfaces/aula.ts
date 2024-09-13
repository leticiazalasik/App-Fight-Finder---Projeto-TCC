import { LutadorAula } from './LutadorAula';
import { TreinadorAula } from './treinadorAula';

export interface Aula{
    id: number; 
    data: Date; 
    treinadores: TreinadorAula[];
    lutadores: LutadorAula[];

}