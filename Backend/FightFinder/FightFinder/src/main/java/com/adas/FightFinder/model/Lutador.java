package com.adas.FightFinder.model;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Lutador extends Pessoa{

    @Nonnull
    private Double peso;

    @Nonnull
    private Double altura;

    @Nonnull
    private Boolean genero;

    @Nonnull
    private Boolean isColorida;

    private Integer vitorias;

    private Integer derrotas;

    private Integer empates;

    private Integer turma;

    private List<Comentario> comentarios;

    private String observacoes;

    private List<Aula> aulas;


}
