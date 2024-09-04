package com.adas.FightFinder.model;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

    private List<Lutador> lutadoresPresentes;

    private List<Lutador> lutadoresAusentes;

    private List<Treinador> treinadoresPresentes;

    private List<Treinador> TreinadoresAusentes;

}

