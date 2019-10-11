import { Injectable } from '@angular/core';
import { Person } from '@ngrx-playground/persons/shared/store/person.model';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PersonActions } from './person.actions';
import { PersonSelectors } from './person.selectors';
import { PersonState } from './person.state';

@Injectable({
  providedIn: 'root',
})
export class PersonFacade {
  constructor(private store: Store<PersonState.IState>) {
  }

  selectedPerson$: Observable<Person> = this.store.pipe(select(PersonSelectors.selectedPerson));
  selectedPersonId$: Observable<string> = this.store.pipe(select(PersonSelectors.selectedPersonId));

  personDataLoaded$ = this.store.select(
    PersonSelectors.personDataLoaded
  ).subscribe((result) => {
    console.log(`result ${result}`);
    return result
  });

  persons$: Observable<Person[]> = this.store.pipe(select(PersonSelectors.getPersons));

  activitySelected$ = this.store.pipe(select(PersonSelectors.activitySelected));

  friendsSameActivities$: Observable<Person[]> = this.store.pipe(select(PersonSelectors.getFriendsSameActivity));

  loadPersonData() {
    this.store.dispatch(PersonActions.loadPersonData())
  }

  selectActivity(a: string) {
    this.store.dispatch(PersonActions.selectActivity({ activity: a }));
  }

  clearActivity() {
    this.store.dispatch(PersonActions.clearActivity());
  }

  selectPerson(name: string) {
    this.store.dispatch(PersonActions.selectPerson({ name: name }))
  }
}
