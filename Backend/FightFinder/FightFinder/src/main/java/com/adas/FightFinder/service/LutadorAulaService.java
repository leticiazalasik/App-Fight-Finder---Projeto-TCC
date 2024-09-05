package com.adas.FightFinder.service;

import com.adas.FightFinder.model.Aula;
import com.adas.FightFinder.model.LutadorAula;
import com.adas.FightFinder.repository.AulaRepository;
import com.adas.FightFinder.repository.LutadorAulaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LutadorAulaService {

    @Autowired
    LutadorAulaRepository lutadorAulaRepository;

    public List<LutadorAula> findAll() {

        return lutadorAulaRepository.findAll();
    }

    public LutadorAula findById(Integer id) {

        return lutadorAulaRepository.findById(id).orElse(null);
    }

    public LutadorAula save(LutadorAula lutadorAula) {

        return lutadorAulaRepository.save(lutadorAula);
    }


    public void delete(LutadorAula lutadorAula){

        lutadorAulaRepository.delete(lutadorAula);
    }
}

