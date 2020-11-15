package com.ynov.jh.demo.domain;

import io.swagger.annotations.ApiModel;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

/**
 * The Utilisateur entity.\n@author A true hipster
 */
@ApiModel(description = "The Utilisateur entity.\n@author A true hipster")
@Entity
@Table(name = "utilisateur")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Utilisateur implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "nom", nullable = false)
    private String nom;

    @NotNull
    @Column(name = "prenom", nullable = false)
    private String prenom;

    @NotNull
    @Column(name = "date_naissance", nullable = false)
    private LocalDate dateNaissance;

    @NotNull
    @Column(name = "role", nullable = false)
    private String role;

    @NotNull
    @Column(name = "pseudo", nullable = false, unique = true)
    private String pseudo;

    @NotNull
    @Column(name = "mot_de_passe", nullable = false)
    private String motDePasse;

    @OneToMany(mappedBy = "utilisateur")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<Emprunt> emprunts = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public Utilisateur nom(String nom) {
        this.nom = nom;
        return this;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public Utilisateur prenom(String prenom) {
        this.prenom = prenom;
        return this;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public LocalDate getDateNaissance() {
        return dateNaissance;
    }

    public Utilisateur dateNaissance(LocalDate dateNaissance) {
        this.dateNaissance = dateNaissance;
        return this;
    }

    public void setDateNaissance(LocalDate dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public String getRole() {
        return role;
    }

    public Utilisateur role(String role) {
        this.role = role;
        return this;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPseudo() {
        return pseudo;
    }

    public Utilisateur pseudo(String pseudo) {
        this.pseudo = pseudo;
        return this;
    }

    public void setPseudo(String pseudo) {
        this.pseudo = pseudo;
    }

    public String getMotDePasse() {
        return motDePasse;
    }

    public Utilisateur motDePasse(String motDePasse) {
        this.motDePasse = motDePasse;
        return this;
    }

    public void setMotDePasse(String motDePasse) {
        this.motDePasse = motDePasse;
    }

    public Set<Emprunt> getEmprunts() {
        return emprunts;
    }

    public Utilisateur emprunts(Set<Emprunt> emprunts) {
        this.emprunts = emprunts;
        return this;
    }

    public Utilisateur addEmprunt(Emprunt emprunt) {
        this.emprunts.add(emprunt);
        emprunt.setUtilisateur(this);
        return this;
    }

    public Utilisateur removeEmprunt(Emprunt emprunt) {
        this.emprunts.remove(emprunt);
        emprunt.setUtilisateur(null);
        return this;
    }

    public void setEmprunts(Set<Emprunt> emprunts) {
        this.emprunts = emprunts;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Utilisateur)) {
            return false;
        }
        return id != null && id.equals(((Utilisateur) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Utilisateur{" +
            "id=" + getId() +
            ", nom='" + getNom() + "'" +
            ", prenom='" + getPrenom() + "'" +
            ", dateNaissance='" + getDateNaissance() + "'" +
            ", role='" + getRole() + "'" +
            ", pseudo='" + getPseudo() + "'" +
            ", motDePasse='" + getMotDePasse() + "'" +
            "}";
    }
}
