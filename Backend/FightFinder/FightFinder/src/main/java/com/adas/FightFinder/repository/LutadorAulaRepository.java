package com.adas.FightFinder.repository;

import com.adas.FightFinder.model.LutadorAula;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface LutadorAulaRepository extends JpaRepository<LutadorAula, Integer> {

    static List<LutadorAula> findByAulaLutadorIdAndPresenteTrue(Integer aulaId) {
        return null;
    }
}
