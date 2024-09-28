import { LutadorAula } from './LutadorAula';
import { TreinadorAula } from './TreinadorAula';

export interface Aula{
    id: number; 
    data: Date; 
    hora: String; 
    treinadores: TreinadorAula[];
    lutadores: LutadorAula[];

}