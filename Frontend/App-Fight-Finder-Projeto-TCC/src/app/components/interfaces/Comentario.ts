import { Lutador } from "./Lutador";

export interface Comentario{
    id: number; 
    data: Date; 
    lutador_id: Lutador;
    descricao: string; 
}
