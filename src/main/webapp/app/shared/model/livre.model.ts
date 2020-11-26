export interface ILivre {
  id?: number;
  titre?: string;
  description?: string;
  isbn?: string;
  code?: string;
}

export class Livre implements ILivre {
  constructor(public id?: number, public titre?: string, public description?: string, public isbn?: string, public code?: string) {}
}
