package com.ynov.jh.demo.service.impl;

import com.ynov.jh.demo.service.EmpruntService;
import com.ynov.jh.demo.domain.Emprunt;
import com.ynov.jh.demo.repository.EmpruntRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link Emprunt}.
 */
@Service
@Transactional
public class EmpruntServiceImpl implements EmpruntService {

    private final Logger log = LoggerFactory.getLogger(EmpruntServiceImpl.class);

    private final EmpruntRepository empruntRepository;

    public EmpruntServiceImpl(EmpruntRepository empruntRepository) {
        this.empruntRepository = empruntRepository;
    }

    @Override
    public Emprunt save(Emprunt emprunt) {
        log.debug("Request to save Emprunt : {}", emprunt);
        return empruntRepository.save(emprunt);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Emprunt> findAll() {
        log.debug("Request to get all Emprunts");
        return empruntRepository.findAll();
    }


    @Override
    @Transactional(readOnly = true)
    public Optional<Emprunt> findOne(Long id) {
        log.debug("Request to get Emprunt : {}", id);
        return empruntRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Emprunt : {}", id);
        empruntRepository.deleteById(id);
    }
}
