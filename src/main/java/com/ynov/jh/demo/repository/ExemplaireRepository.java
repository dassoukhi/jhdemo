package com.ynov.jh.demo.repository;

import com.ynov.jh.demo.domain.Exemplaire;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Exemplaire entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ExemplaireRepository extends JpaRepository<Exemplaire, Long> {
}
