import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BiblioService } from './biblio.service';
@Component({
  selector: 'jhi-livre',
  templateUrl: './biblio.component.html',
})
export class BiblioComponent implements OnInit, OnDestroy {
  eventSubscriber?: Subscription;

  constructor(protected livreService: BiblioService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.livreService.query().subscribe();
  }

  ngOnInit(): void {
    this.loadAll();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }
}
