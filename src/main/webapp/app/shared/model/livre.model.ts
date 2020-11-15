import { IAuteur } from 'app/shared/model/auteur.model';
import { IEmplacement } from 'app/shared/model/emplacement.model';
import { IExemplaire } from 'app/shared/model/exemplaire.model';
import { ITheme } from 'app/shared/model/theme.model';

export interface ILivre {
  id?: number;
  titre?: string;
  description?: string;
  isbn?: string;
  code?: string;
  auteur?: IAuteur;
  emplacement?: IEmplacement;
  exemplaires?: IExemplaire[];
  theme?: ITheme;
}

export class Livre implements ILivre {
  constructor(
    public id?: number,
    public titre?: string,
    public description?: string,
    public isbn?: string,
    public code?: string,
    public auteur?: IAuteur,
    public emplacement?: IEmplacement,
    public exemplaires?: IExemplaire[],
    public theme?: ITheme
  ) {}
}
