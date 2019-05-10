import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PersonSelectors } from './person.selectors';
import { PersonState } from './person.state';
import { PersonActions } from './person.actions';

@Injectable({
  providedIn: 'root',
})
export class PersonFacade {
  constructor(private store: Store<PersonState.IState>) { }

  getPerson(name: string) {
    this.store.pipe(select(PersonSelectors.getPersonsActivities(), { name: name }))
  }

  loadPersonData() {
    this.store.dispatch(PersonActions.loadPersonData())
  }

  selectedPerson$ = this.store.pipe(select(PersonSelectors.selectedPerson));

  personDataLoaded$ = this.store.pipe(select(PersonSelectors.personDataLoaded));

  persons$ = this.store.pipe(select(PersonSelectors.getPersons));

  selectPerson(name: string) {
    this.store.dispatch(PersonActions.selectPerson({ name: name }))
  }
}