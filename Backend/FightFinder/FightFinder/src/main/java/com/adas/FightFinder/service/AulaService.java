package com.adas.FightFinder.service;

import com.adas.FightFinder.model.Aula;
import com.adas.FightFinder.repository.AulaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AulaService {

    @Autowired
    AulaRepository aulaRepository;

    public List<Aula> findAll() {

        return aulaRepository.findAll();
    }

    public Aula findById(Integer id) {

        return aulaRepository.findById(id).orElse(null);
    }

    public Aula save(Aula aula) {

        return AulaRepository.save(aula);
    }


    public void delete(Aula aula){

        aulaRepository.delete(aula);
    }
}
