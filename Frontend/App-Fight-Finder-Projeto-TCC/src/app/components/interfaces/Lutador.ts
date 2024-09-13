import { Pessoa } from './Pessoa';
import { Comentario } from './comentario';


export interface Lutador extends Pessoa{
    id: number; 
    peso: number; 
    altura: number; 
    genero: boolean;
    isColorida: boolean;
    vitorias: number;
    derrotas: number; 
    empates: number; 
    turma: number; 
    observacoes: string; 
    comentarios: Comentario[];
}