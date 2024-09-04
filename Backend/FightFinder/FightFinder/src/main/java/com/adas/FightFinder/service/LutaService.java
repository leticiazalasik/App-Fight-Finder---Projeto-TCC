package com.adas.FightFinder.service;

import com.adas.FightFinder.model.Luta;
import com.adas.FightFinder.repository.LutaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LutaService {

    @Autowired
    LutaRepository lutaRepository;

    public List<Luta> findAll() {
        return lutaRepository.findAll();
    }

    public static Luta findById(Integer id) {
        return lutaRepository.findById(id).orElse(null);
    }

    public Luta save(Luta luta) {
        return lutaRepository.save(luta);
    }

    public void delete(Luta luta) {
        lutaRepository.delete(luta);
    }
}
