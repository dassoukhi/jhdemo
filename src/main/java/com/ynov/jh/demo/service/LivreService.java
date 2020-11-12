package com.ynov.jh.demo.service;

import com.ynov.jh.demo.domain.Livre;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link Livre}.
 */
public interface LivreService {

    /**
     * Save a livre.
     *
     * @param livre the entity to save.
     * @return the persisted entity.
     */
    Livre save(Livre livre);

    /**
     * Get all the livres.
     *
     * @return the list of entities.
     */
    List<Livre> findAll();


    /**
     * Get the "id" livre.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Livre> findOne(Long id);

    /**
     * Delete the "id" livre.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
