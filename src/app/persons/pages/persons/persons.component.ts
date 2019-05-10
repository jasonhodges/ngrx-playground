import { Component, OnInit, Input } from '@angular/core';

import { PersonModel, PersonFacade } from '../../shared/store';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  @Input() persons: PersonModel.Person[];
  selectedPerson$ = this._pf.selectedPerson$;

  constructor(private _pf: PersonFacade) { }

  ngOnInit() {

  }

}