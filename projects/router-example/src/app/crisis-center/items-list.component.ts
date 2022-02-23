
import { Component, OnInit } from '@angular/core';
import { Crisis, CrisisService } from './item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    <ul class="items">
      <li *ngFor="let crisis of crises"
        [class.selected]="isSelected(crisis)"
        (click)="onSelect(crisis)">
        <span class="badge">{{crisis.id}}</span> {{crisis.name}}
      </li>
    </ul>
  `,
  providers:[CrisisService]
})
export class ItemsListComponent implements OnInit {
  crises: Crisis[] = [];

   _selectedId: number;

  constructor(
    private _service: CrisisService,
    private _router: Router,
    private route: ActivatedRoute) {
    this._selectedId = +this.route.snapshot.params['id'];
  }

  isSelected(crisis: Crisis) { return crisis.id === this._selectedId; }

  ngOnInit() {
    this._service.getCrises().then(crises => this.crises = crises);
  }

  onSelect(crisis: Crisis) {
    this._router.navigate(['item-details/'+crisis.id]);
  }
}