import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroService } from './heroes/shared/hero.service';
import { HeroComponent } from './heroes/hero/hero.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';

import { VillainListComponent } from './villains/villain-list/villain-list.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'heroes',
    children: [
      {
        path: 'hero/:id',
        component: HeroComponent
      },
      {
        path: 'hero-list',
        component: HeroListComponent
      },
      {
        path: '**',
        redirectTo: 'hero-list',
      }
    ]
  },
  {
    path: 'villains',
    children: [
      {
        path: 'villain-list',
        component: VillainListComponent
      },
      {
        path: '**',
        redirectTo: 'villain-list',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
