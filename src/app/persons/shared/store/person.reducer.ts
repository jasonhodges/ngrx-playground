import { Person } from '@ngrx-playground/persons/shared/store/person.model';
import { PersonState } from '@ngrx-playground/persons/shared/store/person.state';
import { createReducer, on } from '@ngrx/store';
import { PersonActions } from './person.actions';


export namespace PersonReducer {
  const personReducer = createReducer(
    PersonState.initialState,
    on(PersonActions.personDataLoadedSuccess, (state, { persons, ids }) => {
        const p = persons;
        let people = p.reduce(
          (persons: { [id: string]: Person }, person: Person) => {
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
          ids: ids,
          persons: people,
          personDataLoaded: true
        }
      }
    ),
    on(PersonActions.selectPerson, (state, { name }) => {
      return {
        ...state,
        selectedPerson: mapPerson(state, name)
      }
    }),
    on(PersonActions.selectActivity, (state, {activity}) => {
      return {
        ...state,
        selectedPerson: {
          ...state.selectedPerson,
          activityToDo: activity,
          activitySelected: true
        }

      }
    }),
    on(PersonActions.clearActivity, (state) => {
      return {
        ...state,
        selectedPerson: {
          ...state.selectedPerson,
          activityToDo: null,
          activitySelected: false
        }
      }
    })
  );

  export function reducer(state: PersonState.IState | undefined, action: PersonActions.PersonActionsUnion) {
    return personReducer(state, action);
  }

  export function mapPerson(state: PersonState.IState, name: string) {
    console.log(state);
    return state.persons[name];
  }
}
