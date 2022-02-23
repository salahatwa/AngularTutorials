import { Component } from '@angular/core';
import { DialogService } from './dialog.service';
import { HeroService } from './heroes/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [DialogService, HeroService],
})
export class AppComponent {
  title = 'router-example';
}
