import { Component, OnInit, OnDestroy } from '@angular/core';
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
  eventSubscriber?: Subscription;

  constructor(protected livreService: BiblioService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.livreService.query().subscribe((res: HttpResponse<ILivre[]>) => (this.livres = res.body || []));
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
