export interface IAuteur {
  id?: number;
  auteur?: string;
}

export class Auteur implements IAuteur {
  constructor(public id?: number, public auteur?: string) {}
}
