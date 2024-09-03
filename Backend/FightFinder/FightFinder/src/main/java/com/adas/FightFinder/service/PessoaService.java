package com.adas.FightFinder.service;

import com.adas.FightFinder.model.Pessoa;
import com.adas.FightFinder.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PessoaService {
    @Autowired
    PessoaRepository pessoaRepository;

    public List<Pessoa> findAll() {
        return pessoaRepository.findAll();
    }

    public static Pessoa findById(Integer id) {
        return pessoaRepository.findById(id).orElse(null);
    }

    public Pessoa save(Pessoa pessoa) {
        return pessoaRepository.save(pessoa);
    }

    public void delete(Pessoa pessoa) {
        pessoaRepository.delete(pessoa);
    }
}
