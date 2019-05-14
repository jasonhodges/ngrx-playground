import { createAction, props, union } from '@ngrx/store';
import { PersonModel } from './person.model';

export namespace PersonActions {
  export const loadPersonData = createAction(
    '[Person / API] Load'
  )

  export const personDataLoadedSuccess = createAction(
    '[Person / API] Person Data Loaded Success',
    props<{ persons: PersonModel.Person[] }>()
  )

  export const selectPerson = createAction(
    '[Person] select person',
    props<{ name: string }>()
  )

  export const selectActivity = createAction(
    '[Person] select activity',
    props<{ activity: string }> ()
  )

  const all = union({
    loadPersonData,
    personDataLoadedSuccess,
    selectPerson,
    selectActivity
  });
  export type PersonActionsUnion = typeof all;
}