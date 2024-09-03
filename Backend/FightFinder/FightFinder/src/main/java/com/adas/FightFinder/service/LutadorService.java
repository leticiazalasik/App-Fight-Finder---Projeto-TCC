package com.adas.FightFinder.service;

import com.adas.FightFinder.model.Lutador;
import com.adas.FightFinder.repository.LutadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class LutadorService {

    @Autowired
    LutadorRepository lutadorRepository;

    public List<Lutador> findAll() {
        return lutadorRepository.findAll();
    }

    public static Lutador findById(Integer id) {
        return lutadorRepository.findById(id).orElse(null);
    }

    public Lutador save(Lutador lutador) {
        return lutadorRepository.save(lutador);
    }

    public void delete(Lutador lutador) {
        lutadorRepository.delete(lutador);
    }
}
