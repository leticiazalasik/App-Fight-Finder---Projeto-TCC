package com.adas.FightFinder.controller;


import com.adas.FightFinder.model.Pessoa;
import com.adas.FightFinder.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pessoa")
public class PessoaController {

//    @Autowired
//    PessoaService pessoaService;
//
//    @GetMapping
//    public ResponseEntity<List<Pessoa>> findAll(){
//        return ResponseEntity.ok(pessoaService.findAll());
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Pessoa> findById(@PathVariable Integer id){
//        return ResponseEntity.ok(pessoaService.findById(id));
//    }
//
//    @PostMapping
//    public ResponseEntity<Pessoa> create(@RequestBody Pessoa pessoa){
//        return ResponseEntity.ok(pessoaService.save(pessoa));
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<Pessoa> update(@RequestBody Pessoa pessoa){
//        return ResponseEntity.ok(pessoaService.save(pessoa));
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Pessoa> delete(@PathVariable Integer id){
//        Pessoa pessoa = pessoaService.findById(id);
//        pessoaService.delete(pessoa);
//        return ResponseEntity.ok(pessoa);
//    }
}
