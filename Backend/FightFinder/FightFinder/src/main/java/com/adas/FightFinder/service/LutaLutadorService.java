package com.adas.FightFinder.service;

import com.adas.FightFinder.model.LutaLutador;
import com.adas.FightFinder.repository.LutaLutadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LutaLutadorService {

    @Autowired
    LutaLutadorRepository lutaLutadorRepository;

    public List<LutaLutador> findAll() {

        return lutaLutadorRepository.findAll();
    }

    public LutaLutador findById(Integer id) {

        return lutaLutadorRepository.findById(id).orElse(null);
    }

    public LutaLutador save(LutaLutador lutaLutador) {
        return lutaLutadorRepository.save(lutaLutador);
    }

    public void delete(LutaLutador lutaLutador) {
        lutaLutadorRepository.delete(lutaLutador);
    }
}
