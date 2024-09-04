package com.adas.FightFinder.service;

import com.adas.FightFinder.model.Escola;
import com.adas.FightFinder.model.Pessoa;
import com.adas.FightFinder.repository.EscolaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EscolaService {

    @Autowired
    EscolaRepository escolaRepository;

    public List<Escola> findAll() {
        return escolaRepository.findAll();
    }

    public static Escola findById(Integer id) {
        return escolaRepository.findById(id).orElse(null);
    }

    public Escola save(Escola escola) {
        return escolaRepository.save(escola);
    }

    public void delete(Escola escola) {
        escolaRepository.delete(escola);
    }
}
