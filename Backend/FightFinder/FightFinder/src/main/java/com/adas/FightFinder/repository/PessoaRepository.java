package com.adas.FightFinder.repository;

import com.adas.FightFinder.model.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Pessoa, Integer> {


    }