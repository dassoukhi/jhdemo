import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhdemoSharedModule } from 'app/shared/shared.module';
import { JhdemoCoreModule } from 'app/core/core.module';
import { JhdemoAppRoutingModule } from './app-routing.module';
import { JhdemoHomeModule } from './home/home.module';
import { JhdemoEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { LivreSearchAutorComponent } from './livre-search-autor/livre-search-autor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    JhdemoSharedModule,
    JhdemoCoreModule,
    JhdemoHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhdemoEntityModule,
    JhdemoAppRoutingModule,
    FormsModule,
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    ErrorComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    FooterComponent,
    LivreSearchAutorComponent,
  ],
  bootstrap: [MainComponent],
})
export class JhdemoAppModule {}
