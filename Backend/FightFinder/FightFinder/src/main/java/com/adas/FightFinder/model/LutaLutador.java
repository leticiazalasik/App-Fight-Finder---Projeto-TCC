package com.adas.FightFinder.model;

import jakarta.persistence.*;

@Entity
public class LutaLutador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Luta luta;

    @ManyToOne
    private Lutador lutador;
}