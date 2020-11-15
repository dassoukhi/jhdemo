import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IExemplaire, Exemplaire } from 'app/shared/model/exemplaire.model';
import { ExemplaireService } from './exemplaire.service';
import { IEmprunt } from 'app/shared/model/emprunt.model';
import { EmpruntService } from 'app/entities/emprunt/emprunt.service';
import { ILivre } from 'app/shared/model/livre.model';
import { LivreService } from 'app/entities/livre/livre.service';

type SelectableEntity = IEmprunt | ILivre;

@Component({
  selector: 'jhi-exemplaire-update',
  templateUrl: './exemplaire-update.component.html',
})
export class ExemplaireUpdateComponent implements OnInit {
  isSaving = false;
  emprunts: IEmprunt[] = [];
  livres: ILivre[] = [];

  editForm = this.fb.group({
    id: [],
    disponibilite: [null, [Validators.required]],
    emprunt: [],
    livre: [],
  });

  constructor(
    protected exemplaireService: ExemplaireService,
    protected empruntService: EmpruntService,
    protected livreService: LivreService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ exemplaire }) => {
      this.updateForm(exemplaire);

      this.empruntService
        .query({ filter: 'exemplaire-is-null' })
        .pipe(
          map((res: HttpResponse<IEmprunt[]>) => {
            return res.body || [];
          })
        )
        .subscribe((resBody: IEmprunt[]) => {
          if (!exemplaire.emprunt || !exemplaire.emprunt.id) {
            this.emprunts = resBody;
          } else {
            this.empruntService
              .find(exemplaire.emprunt.id)
              .pipe(
                map((subRes: HttpResponse<IEmprunt>) => {
                  return subRes.body ? [subRes.body].concat(resBody) : resBody;
                })
              )
              .subscribe((concatRes: IEmprunt[]) => (this.emprunts = concatRes));
          }
        });

      this.livreService.query().subscribe((res: HttpResponse<ILivre[]>) => (this.livres = res.body || []));
    });
  }

  updateForm(exemplaire: IExemplaire): void {
    this.editForm.patchValue({
      id: exemplaire.id,
      disponibilite: exemplaire.disponibilite,
      emprunt: exemplaire.emprunt,
      livre: exemplaire.livre,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const exemplaire = this.createFromForm();
    if (exemplaire.id !== undefined) {
      this.subscribeToSaveResponse(this.exemplaireService.update(exemplaire));
    } else {
      this.subscribeToSaveResponse(this.exemplaireService.create(exemplaire));
    }
  }

  private createFromForm(): IExemplaire {
    return {
      ...new Exemplaire(),
      id: this.editForm.get(['id'])!.value,
      disponibilite: this.editForm.get(['disponibilite'])!.value,
      emprunt: this.editForm.get(['emprunt'])!.value,
      livre: this.editForm.get(['livre'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IExemplaire>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: SelectableEntity): any {
    return item.id;
  }
}
