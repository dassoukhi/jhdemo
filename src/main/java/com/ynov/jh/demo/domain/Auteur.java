package com.ynov.jh.demo.domain;

import io.swagger.annotations.ApiModel;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * The Auteur entity.\n@author A true hipster
 */
@ApiModel(description = "The Auteur entity.\n@author A true hipster")
@Entity
@Table(name = "auteur")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Auteur implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "auteur", nullable = false)
    private String auteur;

    @OneToMany(mappedBy = "auteur")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<Livre> livres = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAuteur() {
        return auteur;
    }

    public Auteur auteur(String auteur) {
        this.auteur = auteur;
        return this;
    }

    public void setAuteur(String auteur) {
        this.auteur = auteur;
    }

    public Set<Livre> getLivres() {
        return livres;
    }

    public Auteur livres(Set<Livre> livres) {
        this.livres = livres;
        return this;
    }

    public Auteur addLivre(Livre livre) {
        this.livres.add(livre);
        livre.setAuteur(this);
        return this;
    }

    public Auteur removeLivre(Livre livre) {
        this.livres.remove(livre);
        livre.setAuteur(null);
        return this;
    }

    public void setLivres(Set<Livre> livres) {
        this.livres = livres;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Auteur)) {
            return false;
        }
        return id != null && id.equals(((Auteur) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Auteur{" +
            "id=" + getId() +
            ", auteur='" + getAuteur() + "'" +
            "}";
    }
}
