export interface Aula {
    id: number;
    data: Date;
    lutadoresPresentes: number[]; // Array de IDs de lutadores e treinadores
    treinadoresPresentes: number[]; // Array de IDs de lutadores e treinadores
    lutadoresAusentes: number[]; // Array de IDs de lutadores e treinadores
    treinadoresAusentes: number[]; // Array de IDs de lutadores e treinadores
    horario: string; 
    
    }
