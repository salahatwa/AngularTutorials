import {Component}     from '@angular/core';

import {ItemsListComponent}   from './items-list.component';
import {ItemDetailComponent} from './item-detail.component';
import {CrisisService}         from './item.service';

@Component({
  template:  `
    <h2>CRISIS CENTER</h2>
    <router-outlet></router-outlet>
  `,
  providers:  [CrisisService]
})
export class CrisisCenterComponent { }