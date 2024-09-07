package com.adas.FightFinder.repository;

import com.adas.FightFinder.model.Luta;
import com.adas.FightFinder.model.LutaLutador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LutaRepository extends JpaRepository<Luta, Integer> {
}
