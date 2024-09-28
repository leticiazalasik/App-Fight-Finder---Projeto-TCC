package com.adas.FightFinder.service;

import com.adas.FightFinder.model.Aula;
import com.adas.FightFinder.model.Lutador;
import com.adas.FightFinder.model.LutadorAula;
import com.adas.FightFinder.model.TreinadorAula;
import com.adas.FightFinder.repository.AulaRepository;
import com.adas.FightFinder.repository.LutadorAulaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AulaService {

    @Autowired
    AulaRepository aulaRepository;

    @Autowired
    LutadorAulaService lutadorAulaService;

    @Autowired
    TreinadorAulaService treinadorAulaService;
    public List<Aula> findAll() {

        return aulaRepository.findAll();
    }

    public Aula findById(Integer id) {

        return aulaRepository.findById(id).orElse(null);
    }

    public Aula save(Aula aula) {
       Aula novaAula = aulaRepository.save(aula);

       List<LutadorAula> lutadores= aula.getLutadores();
       for(LutadorAula lutador : lutadores){
           lutador.setAulaLutador(novaAula);
       }
        lutadorAulaService.saveAll(lutadores);

//        List<TreinadorAula> treinadores= aula.getTreinadores();
//        for(TreinadorAula treinador : treinadores){
//            treinador.setAulaTreinador(novaAula);
//        }
//
//        treinadorAulaService.saveAll(treinadores);
       return novaAula;
    }


    public void delete(Aula aula){

        aulaRepository.delete(aula);
    }

    public List<Lutador> getPresentesByAulaId(Integer aulaId) {
        // Buscar todos os LutadorAula associados à aula e que estão presentes
        List<LutadorAula> lutadoresAula = LutadorAulaRepository.findByAulaLutadorIdAndPresenteTrue(aulaId);

        // Extrair os lutadores presentes
        return lutadoresAula.stream()
                .map(LutadorAula::getLutador)
                .collect(Collectors.toList());
    }

}
