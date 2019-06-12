import { Person } from '@ngrx-playground/persons/shared/store/person.model';

export namespace PersonState {

  export interface IState {
    ids: string[];
    persons: { [id: string]: Person };
    selectedPerson: Person;
    personDataLoaded: boolean;
  }

  export const initialState: IState = {
    ids: [],
    persons: undefined,
    selectedPerson: undefined,
    personDataLoaded: false,
  }
}
