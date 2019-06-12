import { Person } from '@ngrx-playground/persons/shared/store/person.model';
import { PersonState } from '@ngrx-playground/persons/shared/store/person.state';
import { PersonActions } from './person.actions';

export namespace PersonReducer {
  export function reducer(
    state: PersonState.IState = PersonState.initialState,
    action: PersonActions.PersonActionsUnion
  ): PersonState.IState {
    switch (action.type) {
      case PersonActions.personDataLoadedSuccess.type: {
        const p = action.persons;
        const persons = p.reduce(
          (persons: {[id: string]: Person}, person: Person) => {
            return {
              ...persons,
              [person.id]: person,
            }
          },
          {
            ...state.persons
          }
        );
          return {
            ...state,
            ids: action.ids,
            persons,
            personDataLoaded: true
          }
      }
      case PersonActions.selectPerson.type: {
        return {
          ...state,
          selectedPerson: mapPerson(state, action.name)
        }
      }

      case PersonActions.selectActivity.type: {
        return {
          ...state,
          selectedPerson: {
            ...state.selectedPerson,
            activityToDo: action.activity,
            activitySelected: true
          }
         
        }
      }

      case PersonActions.clearActivity.type: {
        return {
          ...state,
          selectedPerson: {
            ...state.selectedPerson,
            activityToDo: null,
            activitySelected: false
          }
         
        }
      }
      default: {
        return state;
      }
    }
  }

  export function mapPerson(state: PersonState.IState, name: string) {
    console.log(state);
    return state.persons[name];
  }
}
