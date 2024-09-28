import { Pessoa } from './Pessoa';
import { Comentario } from './Comentario';


export interface Lutador extends Pessoa{
    id: number; 
    peso: number | null; 
    altura: number ; 
    genero: string;
    isColorida: boolean;
    vitorias: number;
    derrotas: number; 
    empates: number; 
    turma: string; 
    observacoes: string; 
    comentarios: Comentario[];
}