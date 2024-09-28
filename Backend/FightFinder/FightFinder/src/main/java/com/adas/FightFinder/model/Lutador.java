package com.adas.FightFinder.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@NoArgsConstructor
@Data
@Table (name = "lutador")
public class Lutador extends Pessoa{

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Nonnull
    private Double peso;

    private Double altura;

    @Nonnull
    private String genero;

    @Nonnull
    private Boolean isColorida;

    private Integer vitorias;

    private Integer derrotas;

    private Integer empates;

    private String turma;
    private String observacoes;

    @OneToMany(mappedBy = "lutadorComentario", cascade = CascadeType.ALL)
    private List<Comentario> comentarios;
}
