package com.adas.FightFinder.service;

import com.adas.FightFinder.model.Comentario;
import com.adas.FightFinder.model.Escola;
import com.adas.FightFinder.repository.ComentarioRepository;
import com.adas.FightFinder.repository.EscolaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComentarioService {

    @Autowired
    ComentarioRepository comentarioRepository;

    public List<Comentario> findAll() {
        return comentarioRepository.findAll();
    }

    public Comentario findById(Integer id) {

        return comentarioRepository.findById(id).orElse(null);
    }

    public Comentario save(Comentario comentario) {
        return comentarioRepository.save(comentario);
    }

    public void delete(Comentario comentario) {
        comentarioRepository.delete(comentario);
    }
}
