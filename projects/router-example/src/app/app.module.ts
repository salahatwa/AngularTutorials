import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { ItemDetailComponent } from './crisis-center/item-detail.component';
import { ItemsListComponent } from './crisis-center/items-list.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroListComponent } from './heroes/hero-list.component';


const routes: Routes = [
  { path: 'items', component: ItemsListComponent },
  { path: 'item-details/:id', component: ItemDetailComponent },
  { path: 'CrisisCenter', component: CrisisCenterComponent },
  { path: 'heros', component: HeroListComponent },
  { path: 'hero-details/:id', component: HeroDetailComponent }
]

@NgModule({
  declarations: [
    AppComponent, ItemDetailComponent, CrisisCenterComponent, ItemsListComponent, HeroListComponent, HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ], exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
