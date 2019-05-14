import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PersonState } from './person.state';

export namespace PersonSelectors {
  export const getPersonState = createFeatureSelector<PersonState.IState>('persons')

  export const getPersons = (state: PersonState.IState) => state.persons ? state.persons.persons : null

  export const selectedPerson = (state: PersonState.IState) => state ? state.persons.selectedPerson : '';

  export const personDataLoaded = (state: PersonState.IState) => state.persons.personDataLoaded || null;

  export const activitySelected = createSelector(
  selectedPerson,
  (sp) => sp.activitySelected
  );

  export const getFriendsSameActivity = createSelector(
    selectedPerson,
    activitySelected,
    (sp, as) => {
      console.log(sp);
      let friends = [];
      if (as) {
        sp.friends.forEach(f => {
          let added = false;
          f.popularActivities.map(a => {
            console.log(a.activity)
            a.activity === sp.activityToDo ? friends.push(f) : null
          })
            return;
          })
      }
      console.log('friends: ', friends)
      return friends;
    }
  )
}

// arr1.filter(e => arr2.map(e2 => e2.id).includes(e.id)).map(e => return (<div>Match</div>));