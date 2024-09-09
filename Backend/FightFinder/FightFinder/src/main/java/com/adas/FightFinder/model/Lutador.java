package com.adas.FightFinder.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
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
    private String observacoes;

    @OneToMany(mappedBy = "lutadorComentario")
    private List<Comentario> comentarios;


}
