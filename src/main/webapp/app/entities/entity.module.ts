import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: () => import('./region/region.module').then(m => m.JhdemoRegionModule),
      },
      {
        path: 'country',
        loadChildren: () => import('./country/country.module').then(m => m.JhdemoCountryModule),
      },
      {
        path: 'location',
        loadChildren: () => import('./location/location.module').then(m => m.JhdemoLocationModule),
      },
      {
        path: 'department',
        loadChildren: () => import('./department/department.module').then(m => m.JhdemoDepartmentModule),
      },
      {
        path: 'task',
        loadChildren: () => import('./task/task.module').then(m => m.JhdemoTaskModule),
      },
      {
        path: 'employee',
        loadChildren: () => import('./employee/employee.module').then(m => m.JhdemoEmployeeModule),
      },
      {
        path: 'job',
        loadChildren: () => import('./job/job.module').then(m => m.JhdemoJobModule),
      },
      {
        path: 'job-history',
        loadChildren: () => import('./job-history/job-history.module').then(m => m.JhdemoJobHistoryModule),
      },
      {
        path: 'livre',
        loadChildren: () => import('./livre/livre.module').then(m => m.JhdemoLivreModule),
      },
      {
        path: 'utilisateur',
        loadChildren: () => import('./utilisateur/utilisateur.module').then(m => m.JhdemoUtilisateurModule),
      },
      {
        path: 'auteur',
        loadChildren: () => import('./auteur/auteur.module').then(m => m.JhdemoAuteurModule),
      },
      {
        path: 'emplacement',
        loadChildren: () => import('./emplacement/emplacement.module').then(m => m.JhdemoEmplacementModule),
      },
      {
        path: 'theme',
        loadChildren: () => import('./theme/theme.module').then(m => m.JhdemoThemeModule),
      },
      {
        path: 'exemplaire',
        loadChildren: () => import('./exemplaire/exemplaire.module').then(m => m.JhdemoExemplaireModule),
      },
      {
        path: 'emprunt',
        loadChildren: () => import('./emprunt/emprunt.module').then(m => m.JhdemoEmpruntModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class JhdemoEntityModule {}
