import { Lutador } from "./lutador";
import { Treinador } from "./treinador";

export interface Luta{
    id: number; 
    rodada: number; 
    status: boolean;
    treinador: Treinador; 
    lutador1: Lutador; 
    lutador2: Lutador; 
    
}