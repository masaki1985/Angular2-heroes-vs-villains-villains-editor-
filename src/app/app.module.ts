import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './core/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { HeroService } from './heroes/shared/hero.service';
import { ZeroPaddingPipe } from './shared/zero-padding.pipe';
import { VillainsComponent } from './villains/villains.component';
import { VillainListComponent } from './villains/villain-list/villain-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroesComponent,
    HeroListComponent,
    ZeroPaddingPipe,
    VillainsComponent,
    VillainListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
