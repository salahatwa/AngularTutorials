import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero, HeroService } from './hero.service';

@Component({
  template: `
  <h2>HEROES</h2>
  <div *ngIf="hero">
    <h3>"{{hero.name}}"</h3>
    <div>
      <label>Id: </label>{{hero.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoHeroes()">Back</button>
    </p>
  </div>
  `,
})
export class HeroDetailComponent implements OnInit {
  hero: Hero = new Hero(0, '');

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _service: HeroService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this._service.getHero(id).then(hero => this.hero = hero);
  }

  gotoHeroes() {
    this._router.navigate(['heros']);
  }
}
