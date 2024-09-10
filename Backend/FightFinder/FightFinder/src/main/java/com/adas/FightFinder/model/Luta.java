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

    @OneToOne
    private Treinador treinador;

    @OneToOne
    private Lutador lutador1;

    @OneToOne
    private Lutador lutador2;
}
