import { Component, Input, OnInit } from '@angular/core';
import { Person, PersonFacade } from '@ngrx-playground/persons/shared/store';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input() selectedPerson: Person;

  constructor(public pf: PersonFacade) {
  }

  ngOnInit() {
  }

}
