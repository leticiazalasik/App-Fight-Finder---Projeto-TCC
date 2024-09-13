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
public class TreinadorAula {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    private Boolean presente;

    //@OneToOne
    //private Treinador treinador;

    //@ManyToOne
    //@JoinColumn(name="aula_id")
    //private Aula aulaTreinador;

    @ManyToOne
    @JoinColumn(name = "treinador_id")
    private Treinador treinador;

    @ManyToOne
    @JoinColumn(name="aula_id")
    private Aula aulaTreinador;


}
