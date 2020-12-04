package com.ynov.jh.demo.repository;

import com.ynov.jh.demo.domain.Livre;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Livre entity.
 */
@SuppressWarnings("unused")
@Repository
public interface LivreRepository extends JpaRepository<Livre, Long> {
	
	
	Optional<Livre> findByTitre(String titre);
	
	
	@Query(value = "select l from Theme t join t.livres l where t.theme = :theme")
	List<Livre> findAllByTheme(@Param("theme") String theme);
    
	@Query(value = "select l from Auteur a join a.livres l where a.auteur = :auteur")
	List<Livre> findAllByAuteur(@Param("auteur") String auteur);

//	SELECT * 
//	   FROM Person p LEFT JOIN Address a 
//	      ON (a.personId = p.personId AND a.npaAddress='1018')



	// "select l from theme t join theme.livres l where t.theme like :theme"
	
	
	//List<Livre> findAllByAuteurs(String auteur);
}

