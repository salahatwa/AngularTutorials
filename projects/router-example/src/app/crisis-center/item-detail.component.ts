
import { Component, OnInit } from '@angular/core';
import { Crisis, CrisisService } from './item.service';
import { ActivatedRoute, CanDeactivate, Router } from '@angular/router';
import { DialogService } from '../dialog.service';

@Component({
  template: `
  <div *ngIf="crisis">
    <h3>"{{editName}}"</h3>
    <div>
      <label>Id: </label>{{crisis.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
    </div>
    <p>
      <button (click)="save()">Save</button>
      <button (click)="cancel()">Cancel</button>
    </p>
  </div>
  `,
  styles: ['input {width: 20em}'],
  providers:[CrisisService]
})
export class ItemDetailComponent implements OnInit, CanDeactivate<any> {

  crisis: Crisis = new Crisis(0, '');
  editName: string = '';

  constructor(
    private _service: CrisisService,
    private _router: Router,
    private route: ActivatedRoute,
    private _dialog: DialogService
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this._service.getCrisis(id).then(crisis => {
      if (crisis) {
        this.editName = crisis.name;
        this.crisis = crisis;
      } else { // id not found
        this.gotoCrises();
      }
    });
  }



  canDeactivate(): any {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this._dialog.confirm('Discard changes?');
  }

  cancel() {
    this.editName = this.crisis.name;
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  gotoCrises() {
    this._router.navigate(['items']);
  }
}