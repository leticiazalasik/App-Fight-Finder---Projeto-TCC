package com.adas.FightFinder.controller;

import com.adas.FightFinder.model.Lutador;
import com.adas.FightFinder.model.Treinador;
import com.adas.FightFinder.service.LutadorService;
import com.adas.FightFinder.service.TreinadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lutador")
public class LutadorController {

    @Autowired
    LutadorService lutadorService;

    @GetMapping
    public ResponseEntity<List<Lutador>> findAll(){

        return ResponseEntity.ok(lutadorService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Lutador> findById(@PathVariable Integer id){
        return ResponseEntity.ok(lutadorService.findById(id));
    }

    @PostMapping("/create")
    public ResponseEntity<Lutador> create(@RequestBody Lutador lutador){
        return ResponseEntity.ok(lutadorService.save(lutador));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Lutador> update(@RequestBody Lutador lutador){
        return ResponseEntity.ok(lutadorService.save(lutador));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Lutador> delete(@PathVariable Integer id){
        Lutador lutador = lutadorService.findById(id);
        lutadorService.delete(lutador);
        return ResponseEntity.ok(lutador);
    }
}

