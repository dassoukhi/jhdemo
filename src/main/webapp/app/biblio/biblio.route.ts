import { Routes } from '@angular/router';

import { LivresearchautorComponent } from './livre-search-autor/livresearchautor.component';
import { LivreSearchThemComponent } from './livre-search-them/livresearchthem.component';
import { LivreSearchTitreComponent } from './livre-search-titre/livresearchtitre.component';
import { BiblioComponent } from './biblio.component';
import { UserRouteAccessService } from '../core/auth/user-route-access-service';

export const biblioRoutes: Routes = [
  {
    path: 'search',
    component: BiblioComponent,
    data: {
      authorities: [],
      pageTitle: 'biblio.search',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'searchbyautor',
    component: LivresearchautorComponent,
    data: {
      authorities: [],
      pageTitle: 'biblio.search',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'searchbythem',
    component: LivreSearchThemComponent,
    data: {
      authorities: [],
      pageTitle: 'biblio.search',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'searchbytitre',
    component: LivreSearchTitreComponent,
    data: {
      authorities: [],
      pageTitle: 'biblio.search',
    },
    canActivate: [UserRouteAccessService],
  },
];
