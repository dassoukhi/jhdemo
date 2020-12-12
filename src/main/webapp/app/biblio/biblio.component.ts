import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ILivre } from 'app/shared/model/livre.model';
import { BiblioService } from './biblio.service';

@Component({
  selector: 'jhi-livre',
  templateUrl: './biblio.component.html',
  styleUrls: ['./biblio.component.scss'],
})
export class BiblioComponent implements OnInit {
  livres?: ILivre[];
  livre?: ILivre;
  on = true;
  eventSubscriber?: Subscription;
  public titre?: string;

  constructor(protected livreService: BiblioService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.livreService.query().subscribe((res: HttpResponse<ILivre[]>) => (this.livres = res.body || []));
  }

  parAuteur(): void {
    if (this.titre) {
      this.livre = undefined;
      this.on = false;
      this.livreService.parAuteur(this.titre).subscribe((res: HttpResponse<ILivre[]>) => (this.livres = res.body || []));
    }
  }

  loadAllParTheme(): void {
    if (this.titre) {
      this.livre = undefined;
      this.on = false;
      this.livreService.parTheme(this.titre).subscribe((res: HttpResponse<ILivre[]>) => (this.livres = res.body || []));
    }
  }

  loadLivre(): void {
    if (this.titre) {
      this.livres = [];
      this.on = false;
      this.livreService.parTitre(this.titre).subscribe((res: HttpResponse<ILivre>) => (this.livre = res.body || undefined));
    }
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInLivres();
  }

  trackId(index: number, item: ILivre): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInLivres(): void {
    this.eventSubscriber = this.eventManager.subscribe('livreListModification', () => this.loadAll());
  }
}
