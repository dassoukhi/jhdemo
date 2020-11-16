import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ILivre, Livre } from 'app/shared/model/livre.model';
import { LivreService } from './livre.service';
import { IEmplacement } from 'app/shared/model/emplacement.model';
import { EmplacementService } from 'app/entities/emplacement/emplacement.service';
import { ITheme } from 'app/shared/model/theme.model';
import { ThemeService } from 'app/entities/theme/theme.service';
import { IAuteur } from 'app/shared/model/auteur.model';
import { AuteurService } from 'app/entities/auteur/auteur.service';

type SelectableEntity = IEmplacement | ITheme | IAuteur;

@Component({
  selector: 'jhi-livre-update',
  templateUrl: './livre-update.component.html',
})
export class LivreUpdateComponent implements OnInit {
  isSaving = false;
  emplacements: IEmplacement[] = [];
  themes: ITheme[] = [];
  auteurs: IAuteur[] = [];

  editForm = this.fb.group({
    id: [],
    titre: [null, [Validators.required]],
    description: [null, [Validators.required]],
    isbn: [null, [Validators.required]],
    code: [null, [Validators.required]],
    emplacement: [],
    theme: [],
    auteur: [],
  });

  constructor(
    protected livreService: LivreService,
    protected emplacementService: EmplacementService,
    protected themeService: ThemeService,
    protected auteurService: AuteurService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ livre }) => {
      this.updateForm(livre);

      this.emplacementService
        .query({ filter: 'livre-is-null' })
        .pipe(
          map((res: HttpResponse<IEmplacement[]>) => {
            return res.body || [];
          })
        )
        .subscribe((resBody: IEmplacement[]) => {
          if (!livre.emplacement || !livre.emplacement.id) {
            this.emplacements = resBody;
          } else {
            this.emplacementService
              .find(livre.emplacement.id)
              .pipe(
                map((subRes: HttpResponse<IEmplacement>) => {
                  return subRes.body ? [subRes.body].concat(resBody) : resBody;
                })
              )
              .subscribe((concatRes: IEmplacement[]) => (this.emplacements = concatRes));
          }
        });

      this.themeService.query().subscribe((res: HttpResponse<ITheme[]>) => (this.themes = res.body || []));

      this.auteurService.query().subscribe((res: HttpResponse<IAuteur[]>) => (this.auteurs = res.body || []));
    });
  }

  updateForm(livre: ILivre): void {
    this.editForm.patchValue({
      id: livre.id,
      titre: livre.titre,
      description: livre.description,
      isbn: livre.isbn,
      code: livre.code,
      emplacement: livre.emplacement,
      theme: livre.theme,
      auteur: livre.auteur,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const livre = this.createFromForm();
    if (livre.id !== undefined) {
      this.subscribeToSaveResponse(this.livreService.update(livre));
    } else {
      this.subscribeToSaveResponse(this.livreService.create(livre));
    }
  }

  private createFromForm(): ILivre {
    return {
      ...new Livre(),
      id: this.editForm.get(['id'])!.value,
      titre: this.editForm.get(['titre'])!.value,
      description: this.editForm.get(['description'])!.value,
      isbn: this.editForm.get(['isbn'])!.value,
      code: this.editForm.get(['code'])!.value,
      emplacement: this.editForm.get(['emplacement'])!.value,
      theme: this.editForm.get(['theme'])!.value,
      auteur: this.editForm.get(['auteur'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ILivre>>): void {
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
