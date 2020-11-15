import { Moment } from 'moment';
import { IEmprunt } from 'app/shared/model/emprunt.model';

export interface IUtilisateur {
  id?: number;
  nom?: string;
  prenom?: string;
  dateNaissance?: Moment;
  role?: string;
  pseudo?: string;
  motDePasse?: string;
  emprunts?: IEmprunt[];
}

export class Utilisateur implements IUtilisateur {
  constructor(
    public id?: number,
    public nom?: string,
    public prenom?: string,
    public dateNaissance?: Moment,
    public role?: string,
    public pseudo?: string,
    public motDePasse?: string,
    public emprunts?: IEmprunt[]
  ) {}
}
