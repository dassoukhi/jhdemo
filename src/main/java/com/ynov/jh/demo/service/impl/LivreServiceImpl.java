package com.ynov.jh.demo.service.impl;

import com.ynov.jh.demo.service.LivreService;
import com.ynov.jh.demo.domain.Livre;
import com.ynov.jh.demo.repository.LivreRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link Livre}.
 */
@Service
@Transactional
public class LivreServiceImpl implements LivreService {

    private final Logger log = LoggerFactory.getLogger(LivreServiceImpl.class);

    private final LivreRepository livreRepository;

    public LivreServiceImpl(LivreRepository livreRepository) {
        this.livreRepository = livreRepository;
    }

    @Override
    public Livre save(Livre livre) {
        log.debug("Request to save Livre : {}", livre);
        return livreRepository.save(livre);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Livre> findAll() {
        log.debug("Request to get all Livres");
        return livreRepository.findAll();
    }


    @Override
    @Transactional(readOnly = true)
    public Optional<Livre> findOne(Long id) {
        log.debug("Request to get Livre : {}", id);
        return livreRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Livre : {}", id);
        livreRepository.deleteById(id);
    }
}
