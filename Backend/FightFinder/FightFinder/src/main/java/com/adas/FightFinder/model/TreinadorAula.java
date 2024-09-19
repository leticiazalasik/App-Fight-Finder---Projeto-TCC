package com.adas.FightFinder.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @ManyToOne
    @JoinColumn(name = "treinador_id")
    private Treinador treinador;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="aula_id")
    private Aula aulaTreinador;


}
