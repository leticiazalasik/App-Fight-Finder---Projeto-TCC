package com.adas.FightFinder.service;

import com.adas.FightFinder.model.LutaLutador;
import com.adas.FightFinder.model.LutaTreinador;
import com.adas.FightFinder.repository.LutaLutadorRepository;
import com.adas.FightFinder.repository.LutaTreinadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LutaTreinadorService {

    @Autowired
    LutaTreinadorRepository lutaTreinadorRepository;

    public List<LutaTreinador> findAll() {

        return lutaTreinadorRepository.findAll();
    }

    public LutaTreinador findById(Integer id) {

        return lutaTreinadorRepository.findById(id).orElse(null);
    }

    public LutaTreinador save(LutaTreinador lutaTreinador) {
        return lutaTreinadorRepository.save(lutaTreinador);
    }

    public void delete(LutaTreinador lutaTreinador) {
        lutaTreinadorRepository.delete(lutaTreinador);
    }
}

