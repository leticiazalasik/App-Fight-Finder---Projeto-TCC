export interface Lutador{

    // Declarar os atributos da Interface
    id: number,
    nome: string,
    idade: number
    modalidade: string,
    foto?: string,
    nivel: number,
    genero: string, 
    peso: number, 
    altura: number, 
    ativo: Boolean, 
    comentarios?: string[], 
   
    vitorias?: number, 
    derrotas?: number, 
    empates?: number, 
    turma?: number,
    
    presencas?: number, 
    faltas?: number

}