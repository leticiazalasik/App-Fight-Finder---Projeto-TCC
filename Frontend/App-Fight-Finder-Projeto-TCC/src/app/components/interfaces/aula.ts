import { LutadorAula } from './LutadorAula';
import { TreinadorAula } from './TreinadorAula';

export interface Aula{
    id: number; 
    data: Date; 
    hora: string; 
    treinadores: TreinadorAula[];
    lutadores: LutadorAula[];

}