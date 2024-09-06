package com.adas.FightFinder.controller;

import com.adas.FightFinder.model.Treinador;
import com.adas.FightFinder.service.TreinadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/treinador")
public class TreinadorController {
    @Autowired
    TreinadorService treinadorService;

    @GetMapping
    public ResponseEntity<List<Treinador>> findAll(){

        return ResponseEntity.ok(treinadorService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Treinador> findById(@PathVariable Integer id){
        return ResponseEntity.ok(treinadorService.findById(id));
    }

    @PostMapping("/create")
    public ResponseEntity<Treinador> create(@RequestBody Treinador treinador){
        return ResponseEntity.ok(treinadorService.save(treinador));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Treinador> update(@RequestBody Treinador treinador){
        return ResponseEntity.ok(treinadorService.save(treinador));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Treinador> delete(@PathVariable Integer id){
        Treinador treinador = treinadorService.findById(id);
        treinadorService.delete(treinador);
        return ResponseEntity.ok(treinador);
    }
}

