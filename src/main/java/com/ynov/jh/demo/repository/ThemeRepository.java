package com.ynov.jh.demo.repository;

import com.ynov.jh.demo.domain.Theme;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Theme entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ThemeRepository extends JpaRepository<Theme, Long> {
}
