package com.adas.FightFinder.model;

import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@MappedSuperclass
public class Pessoa {

    @Nonnull
    private String nome;

    @Nonnull
    private Integer idade;

    @Nonnull
    private String modalidade;

    private String foto;

    private Boolean ativo;

}
