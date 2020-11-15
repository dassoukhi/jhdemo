import { Moment } from 'moment';
import { IUtilisateur } from 'app/shared/model/utilisateur.model';

export interface IEmprunt {
  id?: number;
  dateEmprunt?: Moment;
  utilisateur?: IUtilisateur;
}

export class Emprunt implements IEmprunt {
  constructor(public id?: number, public dateEmprunt?: Moment, public utilisateur?: IUtilisateur) {}
}
