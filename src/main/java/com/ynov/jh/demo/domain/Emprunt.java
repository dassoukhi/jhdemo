package com.ynov.jh.demo.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * The Emprunt entity.\n@author A true hipster
 */
@ApiModel(description = "The Emprunt entity.\n@author A true hipster")
@Entity
@Table(name = "emprunt")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Emprunt implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "date_emprunt", nullable = false)
    private LocalDate dateEmprunt;

    @ManyToOne
    @JsonIgnoreProperties(value = "emprunts", allowSetters = true)
    private Utilisateur utilisateur;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDateEmprunt() {
        return dateEmprunt;
    }

    public Emprunt dateEmprunt(LocalDate dateEmprunt) {
        this.dateEmprunt = dateEmprunt;
        return this;
    }

    public void setDateEmprunt(LocalDate dateEmprunt) {
        this.dateEmprunt = dateEmprunt;
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public Emprunt utilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
        return this;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Emprunt)) {
            return false;
        }
        return id != null && id.equals(((Emprunt) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Emprunt{" +
            "id=" + getId() +
            ", dateEmprunt='" + getDateEmprunt() + "'" +
            "}";
    }
}
