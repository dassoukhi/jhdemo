import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ILivre } from 'app/shared/model/livre.model';
import { BiblioService } from '../biblio.service';

@Component({
  selector: 'jhi-livresearchtitre',
  templateUrl: './livresearchtitre.component.html',
  styleUrls: ['./livresearchtitre.component.scss'],
})
export class LivreSearchTitreComponent implements OnInit {
  livre?: ILivre;
  eventSubscriber?: Subscription;
  public titre?: string;

  constructor(protected livreService: BiblioService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadLivre(): void {
    if (this.titre) {
      this.livreService.parTitre(this.titre).subscribe((res: HttpResponse<ILivre>) => (this.livre = res.body || undefined));
    }
  }

  ngOnInit(): void {
    this.loadLivre();
  }

  trackId(index: number, item: ILivre): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInLivres(): void {
    this.eventSubscriber = this.eventManager.subscribe('livreModification', () => this.loadLivre());
  }
}
