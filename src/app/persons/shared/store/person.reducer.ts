import { PersonState } from './person.state';
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

      default: {
        return state;
      }
    }
  }

  export function mapPerson(state: PersonState.IState, name: string) {
    console.log(state);
    return state.persons.find((p) => {
      return p.name.first === name
    })
  }
}