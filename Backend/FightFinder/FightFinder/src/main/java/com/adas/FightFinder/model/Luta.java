package com.adas.FightFinder.model;

import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
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
public class Luta {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Nonnull
    private Integer rodada;

    private Boolean status;

    @ManyToOne
    @JoinColumn(name = "treinador_id", referencedColumnName = "id")
    private Treinador treinador;

    @ManyToOne
    @JoinColumn(name = "lutador1_id", referencedColumnName = "id")
    private Lutador lutador1;

    @ManyToOne
    @JoinColumn(name = "lutador2_id", referencedColumnName = "id")
    private Lutador lutador2;
}
