package com.ynov.jh.demo.repository;

import com.ynov.jh.demo.domain.JobHistory;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the JobHistory entity.
 */
@SuppressWarnings("unused")
@Repository
public interface JobHistoryRepository extends JpaRepository<JobHistory, Long> {
}
