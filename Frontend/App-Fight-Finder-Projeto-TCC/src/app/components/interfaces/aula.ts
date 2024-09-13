import { LutadorAula } from './LutadorAula';
import { TreinadorAula } from './TreinadorAula';

export interface Aula{
    id: number; 
    data: Date; 
    treinadores: TreinadorAula[];
    lutadores: LutadorAula[];

}