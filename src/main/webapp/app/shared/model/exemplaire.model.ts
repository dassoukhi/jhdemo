import { IEmprunt } from 'app/shared/model/emprunt.model';
import { ILivre } from 'app/shared/model/livre.model';

export interface IExemplaire {
  id?: number;
  disponibilite?: boolean;
  emprunt?: IEmprunt;
  livre?: ILivre;
}

export class Exemplaire implements IExemplaire {
  constructor(public id?: number, public disponibilite?: boolean, public emprunt?: IEmprunt, public livre?: ILivre) {
    this.disponibilite = this.disponibilite || false;
  }
}
