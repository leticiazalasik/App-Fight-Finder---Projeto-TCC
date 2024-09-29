import { Pessoa } from './Pessoa';
import { Comentario } from './Comentario';


export interface Lutador extends Pessoa{
    id: number; 
    peso: number | null; 
    altura: number | null; 
    genero: string;
    isColorida: boolean;
    vitorias: number | null;
    derrotas: number | null;
    empates: number | null;
    turma: string; 
    observacoes: string; 
    comentarios: Comentario[];
}