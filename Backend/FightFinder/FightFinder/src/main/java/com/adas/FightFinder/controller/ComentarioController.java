package com.adas.FightFinder.controller;

import com.adas.FightFinder.model.Comentario;
import com.adas.FightFinder.model.Escola;
import com.adas.FightFinder.service.ComentarioService;
import com.adas.FightFinder.service.EscolaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comentario")
public class ComentarioController {

    @Autowired
    ComentarioService comentarioService;

    @GetMapping
    public ResponseEntity<List<Comentario>> findAll(){
        return ResponseEntity.ok(comentarioService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Comentario> findById(@PathVariable Integer id){
        return ResponseEntity.ok(comentarioService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Comentario> create(@RequestBody Comentario comentario){
        return ResponseEntity.ok(comentarioService.save(comentario));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Comentario> update(@RequestBody Comentario comentario){
        return ResponseEntity.ok(comentarioService.save(comentario));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Comentario> delete(@PathVariable Integer id){
        Comentario comentario = comentarioService.findById(id);
        comentarioService.delete(comentario);
        return ResponseEntity.ok(comentario);
    }
}
