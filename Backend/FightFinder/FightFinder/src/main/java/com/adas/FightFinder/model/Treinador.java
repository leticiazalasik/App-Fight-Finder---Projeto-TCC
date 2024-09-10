package com.adas.FightFinder.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@NoArgsConstructor
@Data
@Table (name = "treinador")

public class Treinador extends Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
}
