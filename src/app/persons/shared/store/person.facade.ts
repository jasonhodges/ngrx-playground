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

  loadPersonData() {
    this.store.dispatch(PersonActions.loadPersonData())
  }

  selectActivity(a: string) {
    this.store.dispatch(PersonActions.selectActivity({ activity: a }));
  }

  selectedPerson$ = this.store.pipe(select(PersonSelectors.selectedPerson));

  personDataLoaded$ = this.store.pipe(select(PersonSelectors.personDataLoaded));

  persons$ = this.store.pipe(select(PersonSelectors.getPersons));

  activitySelected$ = this.store.pipe(select(PersonSelectors.activitySelected));

  friendsSameActivities$ = this.store.pipe(select(PersonSelectors.getFriendsSameActivity))

  selectPerson(name: string) {
    this.store.dispatch(PersonActions.selectPerson({ name: name }))
  }
}