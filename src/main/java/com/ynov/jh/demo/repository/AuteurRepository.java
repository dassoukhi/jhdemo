package com.ynov.jh.demo.repository;

import com.ynov.jh.demo.domain.Auteur;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Auteur entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AuteurRepository extends JpaRepository<Auteur, Long> {
}
