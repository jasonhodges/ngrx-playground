import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { PersonService } from '../person.service';
import { PersonActions} from './person.actions';

@Injectable()
export class PersonEffects {
  @Effect()
  loadPersonData$ = this.actions$.pipe(
    ofType(PersonActions.loadPersonData.type),
    mergeMap(() => this._ps
      .loadPersonData()
      .pipe(map(persons => PersonActions.personDataLoadedSuccess({persons})))
    )
  );

  constructor(
    private actions$: Actions,
    private _ps: PersonService
  ) { }
}