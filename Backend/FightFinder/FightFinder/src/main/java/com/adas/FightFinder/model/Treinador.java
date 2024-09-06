package com.adas.FightFinder.model;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Treinador extends Pessoa {

    @OneToOne(mappedBy = "treinador") // Ou "lutador2", dependendo do relacionamento
    private Luta luta;
}
