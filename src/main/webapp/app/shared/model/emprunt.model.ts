import { Moment } from 'moment';
import { IExemplaire } from 'app/shared/model/exemplaire.model';
import { IUtilisateur } from 'app/shared/model/utilisateur.model';

export interface IEmprunt {
  id?: number;
  dateEmprunt?: Moment;
  exemplaire?: IExemplaire;
  utilisateur?: IUtilisateur;
}

export class Emprunt implements IEmprunt {
  constructor(public id?: number, public dateEmprunt?: Moment, public exemplaire?: IExemplaire, public utilisateur?: IUtilisateur) {}
}
