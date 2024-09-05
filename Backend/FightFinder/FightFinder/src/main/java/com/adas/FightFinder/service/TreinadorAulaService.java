package com.adas.FightFinder.service;

import com.adas.FightFinder.model.LutadorAula;
import com.adas.FightFinder.model.TreinadorAula;
import com.adas.FightFinder.repository.LutadorAulaRepository;
import com.adas.FightFinder.repository.TreinadorAulaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TreinadorAulaService {

    @Autowired
    TreinadorAulaRepository treinadorAulaRepository;

    public List<TreinadorAula> findAll() {

        return treinadorAulaRepository.findAll();
    }

    public TreinadorAula findById(Integer id) {

        return treinadorAulaRepository.findById(id).orElse(null);
    }

    public TreinadorAula save(TreinadorAula treinadorAula) {

        return treinadorAulaRepository.save(treinadorAula);
    }


    public void delete(TreinadorAula treinadorAula){

        treinadorAulaRepository.delete(treinadorAula);
    }
}


