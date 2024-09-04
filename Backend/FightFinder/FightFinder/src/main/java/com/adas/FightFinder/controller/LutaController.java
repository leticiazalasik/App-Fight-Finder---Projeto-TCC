package com.adas.FightFinder.controller;

import com.adas.FightFinder.model.Luta;
import com.adas.FightFinder.model.Pessoa;
import com.adas.FightFinder.service.LutaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/luta")
public class LutaController {

    @Autowired
    LutaService lutaService;

    @GetMapping
    public ResponseEntity<List<Luta>> findAll(){
        return ResponseEntity.ok(lutaService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Luta> findById(@PathVariable Integer id){
        return ResponseEntity.ok(lutaService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Luta> create(@RequestBody Luta luta){
        return ResponseEntity.ok(lutaService.save(luta));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Luta> update(@RequestBody Luta luta){
        return ResponseEntity.ok(lutaService.save(luta));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Luta> delete(@PathVariable Integer id){
        Luta luta = lutaService.findById(id);
        lutaService.delete(luta);
        return ResponseEntity.ok(luta);
    }
}
