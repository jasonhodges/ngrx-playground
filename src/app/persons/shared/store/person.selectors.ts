import { Person } from '@ngrx-playground/persons/shared/store/person.model';
import { PersonState } from '@ngrx-playground/persons/shared/store/person.state';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

export namespace PersonSelectors {
  export const getPersonState = createFeatureSelector<PersonState.IState>('personState');

  export const personDataLoaded = (state: PersonState.IState) => state.personDataLoaded || null;

  export const getPersons: MemoizedSelector<PersonState.IState, Person[]> = createSelector(
    getPersonState,
    (state) => {
      if (state.persons) {
        // @ts-ignore
        return Object.values(state.persons)
      }
    }
  );

  export const selectedPerson: MemoizedSelector<PersonState.IState, Person> = createSelector(
    getPersonState,
    state => state.selectedPerson
  );

  export const selectedPersonId: MemoizedSelector<PersonState.IState, string> = createSelector(
    selectedPerson,
    (sp) => sp.id
  );

  export const activitySelected: MemoizedSelector<PersonState.IState, boolean> = createSelector(
    selectedPerson,
    (sp) => sp.activitySelected
  );

  export const getFriendsSameActivity: MemoizedSelector<PersonState.IState, Person[]> = createSelector(
    getPersonState,
    selectedPerson,
    activitySelected,
    (s, sp, as) => {
      let friends: Person[] = [];
      if (as) {
        sp.friends.forEach((f: any) => {
          const person = s.persons[f]; // grab the person off state.persons by id
          person.popularActivities.map((a: any) => {
            a === sp.activityToDo ? friends.push(f) : null
          });
          return;
        })
      }
      return friends;
    }
  );
}
