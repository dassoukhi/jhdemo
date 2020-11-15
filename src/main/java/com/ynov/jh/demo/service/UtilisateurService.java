package com.ynov.jh.demo.service;

import com.ynov.jh.demo.domain.Utilisateur;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link Utilisateur}.
 */
public interface UtilisateurService {

    /**
     * Save a utilisateur.
     *
     * @param utilisateur the entity to save.
     * @return the persisted entity.
     */
    Utilisateur save(Utilisateur utilisateur);

    /**
     * Get all the utilisateurs.
     *
     * @return the list of entities.
     */
    List<Utilisateur> findAll();


    /**
     * Get the "id" utilisateur.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Utilisateur> findOne(Long id);

    /**
     * Delete the "id" utilisateur.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
