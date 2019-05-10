import { PersonModel } from './person.model';

export namespace PersonState {
  interface IState {
    persons: PersonModel.Person[];
    selectedPerson: string;
    personDataLoaded: boolean
  }

  const initialState: IState = {
    persons: [],
    selectedPerson: '',
    personDataLoaded: false
  }
}