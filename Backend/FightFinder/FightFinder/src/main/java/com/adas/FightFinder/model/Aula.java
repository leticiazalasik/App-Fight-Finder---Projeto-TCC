package com.adas.FightFinder.model;

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

    @OneToMany(mappedBy = "aulaLutador" , cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<LutadorAula> lutadores;

    @OneToMany(mappedBy = "aulaTreinador", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<TreinadorAula> treinadores;


}

