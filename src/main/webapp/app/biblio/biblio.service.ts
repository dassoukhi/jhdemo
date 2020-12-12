import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from '../app.constants';
import { createRequestOption } from '../shared/util/request-util';
import { ILivre } from '../shared/model/livre.model';

type EntityResponseType = HttpResponse<ILivre>;
type EntityArrayResponseType = HttpResponse<ILivre[]>;

@Injectable({ providedIn: 'root' })
export class BiblioService {
  public resourceUrl = SERVER_API_URL + 'api/livres';
  public resourceUrlTitre = SERVER_API_URL + 'api/livres_by_titre';
  public resourceUrlTheme = SERVER_API_URL + 'api/livre_byTheme?theme';
  public resourceUrlAuteur = SERVER_API_URL + 'api/livre_by_auteur?auteur';

  constructor(protected http: HttpClient) {}

  create(livre: ILivre): Observable<EntityResponseType> {
    return this.http.post<ILivre>(this.resourceUrl, livre, { observe: 'response' });
  }

  update(livre: ILivre): Observable<EntityResponseType> {
    return this.http.put<ILivre>(this.resourceUrl, livre, { observe: 'response' });
  }

  parTitre(titre: string): Observable<EntityResponseType> {
    return this.http.get<ILivre>(`${this.resourceUrlTitre}/${titre}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ILivre[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  parTheme(theme: string): Observable<EntityArrayResponseType> {
    const options = createRequestOption(theme);
    return this.http.get<ILivre[]>(`${this.resourceUrlTheme}=${theme}`, { params: options, observe: 'response' });
  }

  parAuteur(auteur: string): Observable<EntityArrayResponseType> {
    const options = createRequestOption(auteur);
    return this.http.get<ILivre[]>(`${this.resourceUrlAuteur}=${auteur}`, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
