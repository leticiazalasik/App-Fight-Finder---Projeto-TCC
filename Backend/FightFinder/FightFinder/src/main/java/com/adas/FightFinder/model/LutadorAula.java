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
public class LutadorAula {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Nonnull
    private Boolean presente;

    @Nonnull
    @OneToOne
    private Lutador lutador;

    @ManyToOne
    @JoinColumn(name="aula_id")
    private Aula aulaLutador;

}
