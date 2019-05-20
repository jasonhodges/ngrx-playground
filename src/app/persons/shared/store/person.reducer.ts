import { PersonState } from './index';
import { PersonActions } from './person.actions';

export namespace PersonReducer {
  export function reducer(
    state: PersonState.IState = PersonState.initialState,
    action: PersonActions.PersonActionsUnion
  ): PersonState.IState {
    switch (action.type) {
      case PersonActions.personDataLoadedSuccess.type: {
        return {
          ...state,
          persons: action.persons,
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
            activitySelected: true
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
    return state.persons.find((p) => {
      return p.firstName === name
    })
  }
}