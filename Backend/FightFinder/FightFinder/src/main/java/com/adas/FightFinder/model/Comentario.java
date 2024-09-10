package com.adas.FightFinder.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Comentario {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Nonnull
    private LocalDateTime data;

    @Nonnull
    private String descricao;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "lutador_id")
    private Lutador lutadorComentario;

}
