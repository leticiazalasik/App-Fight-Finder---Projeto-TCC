package com.adas.FightFinder.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Aula {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Nonnull
    private LocalDateTime data;

    @JsonIgnore
    @OneToMany(mappedBy = "aulaLutador")
    private List<LutadorAula> lutadores;

    @JsonIgnore
    @OneToMany(mappedBy = "aulaTreinador")
    private List<TreinadorAula> treinadores;


}

