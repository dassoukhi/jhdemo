import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IEmprunt, Emprunt } from 'app/shared/model/emprunt.model';
import { EmpruntService } from './emprunt.service';
import { IUtilisateur } from 'app/shared/model/utilisateur.model';
import { UtilisateurService } from 'app/entities/utilisateur/utilisateur.service';

@Component({
  selector: 'jhi-emprunt-update',
  templateUrl: './emprunt-update.component.html',
})
export class EmpruntUpdateComponent implements OnInit {
  isSaving = false;
  utilisateurs: IUtilisateur[] = [];
  dateEmpruntDp: any;

  editForm = this.fb.group({
    id: [],
    dateEmprunt: [null, [Validators.required]],
    utilisateur: [],
  });

  constructor(
    protected empruntService: EmpruntService,
    protected utilisateurService: UtilisateurService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ emprunt }) => {
      this.updateForm(emprunt);

      this.utilisateurService.query().subscribe((res: HttpResponse<IUtilisateur[]>) => (this.utilisateurs = res.body || []));
    });
  }

  updateForm(emprunt: IEmprunt): void {
    this.editForm.patchValue({
      id: emprunt.id,
      dateEmprunt: emprunt.dateEmprunt,
      utilisateur: emprunt.utilisateur,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const emprunt = this.createFromForm();
    if (emprunt.id !== undefined) {
      this.subscribeToSaveResponse(this.empruntService.update(emprunt));
    } else {
      this.subscribeToSaveResponse(this.empruntService.create(emprunt));
    }
  }

  private createFromForm(): IEmprunt {
    return {
      ...new Emprunt(),
      id: this.editForm.get(['id'])!.value,
      dateEmprunt: this.editForm.get(['dateEmprunt'])!.value,
      utilisateur: this.editForm.get(['utilisateur'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IEmprunt>>): void {
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

  trackById(index: number, item: IUtilisateur): any {
    return item.id;
  }
}
