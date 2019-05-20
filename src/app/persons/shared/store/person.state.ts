import { PersonModel } from './person.model';

// export namespace PersonState {
  export interface IState {
    persons: PersonModel.Person[];
    selectedPerson: PersonModel.Person;
    personDataLoaded: boolean;
  }

  export const initialState: IState = {
    persons: [],
    selectedPerson: null,
    personDataLoaded: false,
  }
// }