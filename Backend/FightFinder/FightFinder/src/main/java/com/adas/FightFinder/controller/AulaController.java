package com.adas.FightFinder.controller;

import com.adas.FightFinder.model.Aula;
import com.adas.FightFinder.model.Comentario;
import com.adas.FightFinder.model.Lutador;
import com.adas.FightFinder.service.AulaService;
import com.adas.FightFinder.service.ComentarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/aula")
public class AulaController {

    @Autowired
    AulaService aulaService;

    @GetMapping
    public ResponseEntity<List<Aula>> findAll(){
        return ResponseEntity.ok(aulaService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Aula> findById(@PathVariable Integer id){
        return ResponseEntity.ok(aulaService.findById(id));
    }

    @PostMapping("/create")
    public ResponseEntity<Aula> create(@RequestBody Aula aula){
        return ResponseEntity.ok(aulaService.save(aula));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Aula> update(@RequestBody Aula aula){
        return ResponseEntity.ok(aulaService.save(aula));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Aula> delete(@PathVariable Integer id){
        Aula aula = aulaService.findById(id);
        aulaService.delete(aula);
        return ResponseEntity.ok(aula);
    }

    @GetMapping("/{id}/presentes")
    public ResponseEntity<List<Lutador>> getPresentesByAula(@PathVariable Integer id) {
        List<Lutador> presentes = aulaService.getPresentesByAulaId(id);
        return ResponseEntity.ok(presentes);
    }
}
