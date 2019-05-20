import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PersonState } from './index';

export namespace PersonSelectors {
  export const getPersonState = createFeatureSelector<PersonState.IState>('personState')

  export const getPersons = (state: PersonState.IState) => state.personState.persons || null

  export const selectedPerson = (state: PersonState.IState) => state.personState.selectedPerson || '';

  export const personDataLoaded = (state: PersonState.IState) => state.personState.personDataLoaded || null;

  export const activitySelected = createSelector(
    selectedPerson,
    (sp) => sp.activitySelected
  );

  export const getFriendsSameActivity = createSelector(
    selectedPerson,
    activitySelected,
    (sp, as) => {
      // console.log(sp);
      let friends = [];
      if (as) {
        sp.friends.forEach(f => {
          let added = false;
          f.popularActivities.map(a => {
            // console.log(a.activity)
            a.activity === sp.activityToDo ? friends.push(f) : null
          })
          return;
        })
      }
      // console.log('friends: ', friends)
      return friends;
    }
  )
}