package com.ynov.jh.demo.service;

import com.ynov.jh.demo.domain.Livre;
import com.ynov.jh.demo.domain.Theme;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link Theme}.
 */
public interface ThemeService {

    /**
     * Save a theme.
     *
     * @param theme the entity to save.
     * @return the persisted entity.
     */
    Theme save(Theme theme);

    /**
     * Get all the themes.
     *
     * @return the list of entities.
     */
    List<Theme> findAll();
    
    
    List<Livre> findByTheme(String theme);


    /**
     * Get the "id" theme.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Theme> findOne(Long id);

    /**
     * Delete the "id" theme.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
