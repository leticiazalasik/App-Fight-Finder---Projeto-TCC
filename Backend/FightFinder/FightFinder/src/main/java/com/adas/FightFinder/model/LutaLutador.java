package com.adas.FightFinder.model;

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
public class LutaLutador {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer id;

        @ManyToOne
        @JoinColumn(name="aula_id")
        private Lutador lutador;

        @ManyToOne
        @JoinColumn(name="luta_id")
        private Luta lutaLutador;


}