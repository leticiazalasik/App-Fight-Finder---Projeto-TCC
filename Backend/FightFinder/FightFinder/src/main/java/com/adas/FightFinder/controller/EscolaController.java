package com.adas.FightFinder.controller;

import com.adas.FightFinder.model.Escola;
import com.adas.FightFinder.model.Pessoa;
import com.adas.FightFinder.service.EscolaService;
import com.adas.FightFinder.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/escola")
public class EscolaController {

    @Autowired
    EscolaService escolaService;

    @GetMapping
    public ResponseEntity<List<Escola>> findAll(){
        return ResponseEntity.ok(escolaService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Escola> findById(@PathVariable Integer id){
        return ResponseEntity.ok(escolaService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Escola> create(@RequestBody Escola escola){
        return ResponseEntity.ok(escolaService.save(escola));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Escola> update(@RequestBody Escola escola){
        return ResponseEntity.ok(escolaService.save(escola));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Escola> delete(@PathVariable Integer id){
        Escola escola = escolaService.findById(id);
        escolaService.delete(escola);
        return ResponseEntity.ok(escola);
    }
}
