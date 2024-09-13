import { Lutador } from "./Lutador";
import { Treinador } from "./Treinador";

export interface Luta{
    id: number; 
    rodada: number; 
    status: boolean;
    treinador: Treinador; 
    lutador1: Lutador; 
    lutador2: Lutador; 
    
}