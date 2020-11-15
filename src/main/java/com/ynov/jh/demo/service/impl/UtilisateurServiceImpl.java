package com.ynov.jh.demo.service.impl;

import com.ynov.jh.demo.service.UtilisateurService;
import com.ynov.jh.demo.domain.Utilisateur;
import com.ynov.jh.demo.repository.UtilisateurRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link Utilisateur}.
 */
@Service
@Transactional
public class UtilisateurServiceImpl implements UtilisateurService {

    private final Logger log = LoggerFactory.getLogger(UtilisateurServiceImpl.class);

    private final UtilisateurRepository utilisateurRepository;

    public UtilisateurServiceImpl(UtilisateurRepository utilisateurRepository) {
        this.utilisateurRepository = utilisateurRepository;
    }

    @Override
    public Utilisateur save(Utilisateur utilisateur) {
        log.debug("Request to save Utilisateur : {}", utilisateur);
        return utilisateurRepository.save(utilisateur);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Utilisateur> findAll() {
        log.debug("Request to get all Utilisateurs");
        return utilisateurRepository.findAll();
    }


    @Override
    @Transactional(readOnly = true)
    public Optional<Utilisateur> findOne(Long id) {
        log.debug("Request to get Utilisateur : {}", id);
        return utilisateurRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Utilisateur : {}", id);
        utilisateurRepository.deleteById(id);
    }
}
