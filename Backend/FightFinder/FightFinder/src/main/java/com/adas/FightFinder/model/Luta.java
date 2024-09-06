package com.adas.FightFinder.model;

import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    @OneToOne
    @JoinColumn(name = "lutador1_id")
    private Lutador lutador1;

    @OneToOne
    @JoinColumn(name = "lutador2_id")
    @Nonnull
    private Lutador lutador2;

    @OneToOne
    @JoinColumn(name = "treinador_id")
    private Treinador treinador;
}
