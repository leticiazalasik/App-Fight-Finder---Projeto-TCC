export interface Lutador{

    // Declarar os atributos da Interface
    id: number,
    nome: string,
    modalidade: string,
    nivel: number,
    idade: number,
    genero: string, 
    peso: number, 
    altura: number, 
    ativo: Boolean, 
    foto?: string,
    comentarios?: string[], 
    vitorias?: number, 
    derrotas?: number, 
    empates?: number, 
    presencas?: number, 
    faltas?: number

}