package com.ynov.jh.demo.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * The Exemplaire entity.\n@author A true hipster
 */
@ApiModel(description = "The Exemplaire entity.\n@author A true hipster")
@Entity
@Table(name = "exemplaire")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Exemplaire implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "disponibilite", nullable = false)
    private Boolean disponibilite;

    @OneToOne
    @JoinColumn(unique = true)
    private Emprunt emprunt;

    @ManyToOne
    @JsonIgnoreProperties(value = "exemplaires", allowSetters = true)
    private Livre livre;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean isDisponibilite() {
        return disponibilite;
    }

    public Exemplaire disponibilite(Boolean disponibilite) {
        this.disponibilite = disponibilite;
        return this;
    }

    public void setDisponibilite(Boolean disponibilite) {
        this.disponibilite = disponibilite;
    }

    public Emprunt getEmprunt() {
        return emprunt;
    }

    public Exemplaire emprunt(Emprunt emprunt) {
        this.emprunt = emprunt;
        return this;
    }

    public void setEmprunt(Emprunt emprunt) {
        this.emprunt = emprunt;
    }

    public Livre getLivre() {
        return livre;
    }

    public Exemplaire livre(Livre livre) {
        this.livre = livre;
        return this;
    }

    public void setLivre(Livre livre) {
        this.livre = livre;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Exemplaire)) {
            return false;
        }
        return id != null && id.equals(((Exemplaire) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Exemplaire{" +
            "id=" + getId() +
            ", disponibilite='" + isDisponibilite() + "'" +
            "}";
    }
}
