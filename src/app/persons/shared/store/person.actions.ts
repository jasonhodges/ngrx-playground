import { Person } from '@ngrx-playground/persons/shared/store/person.model';
import { createAction, props, union } from '@ngrx/store';

export namespace PersonActions {
  export const loadPersonData = createAction(
    '[Person / API] Load'
  );

  export const personDataLoadedSuccess = createAction(
    '[Person / API] Person Data Loaded Success',
    props<{ ids: string[], persons: Person[] }>()
  );

  export const selectPerson = createAction(
    '[Person] select person',
    props<{ name: string }>()
  );

  export const selectActivity = createAction(
    `[Person] select activity`,
    props<{ activity: string }>()
  );

  export const clearActivity = createAction(
    '[Person] clear activity'
  );

  const all = union({
    loadPersonData,
    personDataLoadedSuccess,
    selectPerson,
    selectActivity,
    clearActivity
  });
  export type PersonActionsUnion = typeof all;
}
