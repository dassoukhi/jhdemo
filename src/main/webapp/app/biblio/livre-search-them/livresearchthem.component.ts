import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ILivre } from 'app/shared/model/livre.model';
import { BiblioService } from '../biblio.service';

@Component({
  selector: 'jhi-livresearchthem',
  templateUrl: './livresearchthem.component.html',
  styleUrls: ['./livresearchthem.component.scss'],
})
export class LivreSearchThemComponent implements OnInit {
  livres?: ILivre[];
  eventSubscriber?: Subscription;
  public titre?: string;

  constructor(protected livreService: BiblioService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAllParTheme(): void {
    if (this.titre) {
      this.livreService.parTheme(this.titre).subscribe((res: HttpResponse<ILivre[]>) => (this.livres = res.body || []));
    }
  }

  ngOnInit(): void {}

  trackId(index: number, item: ILivre): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInLivres(): void {
    this.eventSubscriber = this.eventManager.subscribe('livreListModification', () => this.loadAllParTheme());
  }
}
