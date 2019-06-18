import { Component, Input, OnInit } from '@angular/core';
import { Person, PersonFacade } from '@ngrx-playground/persons/shared/store';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  @Input() persons?: Person[];

  constructor(public pf: PersonFacade) {
  }

  ngOnInit() {

  }

}
