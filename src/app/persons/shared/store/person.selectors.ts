import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PersonState } from './person.state';

export namespace PersonSelectors {
  const getPersonState = createFeatureSelector<PersonState.IState>('persons')

  export const getPersons = (state: PersonState.IState) => state.persons ? state.persons.persons : null

  export const selectedPerson = (state: PersonState.IState) => state.persons ? state.persons.selectedPerson : '';

  export const personDataLoaded = (state: PersonState.IState) => state.persons.personDataLoaded || null;

}