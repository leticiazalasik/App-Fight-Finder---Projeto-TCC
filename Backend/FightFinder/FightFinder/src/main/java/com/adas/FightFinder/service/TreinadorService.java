package com.adas.FightFinder.service;

import com.adas.FightFinder.model.Treinador;
import com.adas.FightFinder.repository.TreinadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class TreinadorService {

    @Autowired
    TreinadorRepository treinadorRepository;

    public List<Treinador> findAll() {
        return treinadorRepository.findAll();
    }

    public Treinador findById(Integer id) {

        return treinadorRepository.findById(id).orElse(null);
    }

    public Treinador save(Treinador treinador) {
        return treinadorRepository.save(treinador);
    }

    public void delete(Treinador treinador) {
        treinadorRepository.delete(treinador);
    }
}
