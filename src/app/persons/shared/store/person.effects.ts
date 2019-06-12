import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { EMPTY, fromEvent } from 'rxjs';
import { PersonService } from '../person.service';
import { PersonActions} from './person.actions';
import { PersonDataMapper} from '../person.data-mapper';

@Injectable()
export class PersonEffects {
  @Effect()
  loadPersonData$ = this.actions$.pipe(
    ofType(PersonActions.loadPersonData.type),
    mergeMap(() => this._ps
      .loadPersonData()
      .pipe(
        map((response) => this.dataMapper.buildPerson(response)),
        map((persons) => PersonActions.personDataLoadedSuccess({persons: persons}))
      )
    )
  );

  @Effect({ dispatch: false })
  personClick$ = fromEvent(document, 'click').pipe(
    map(() => {console.log('clicked')}))

  constructor(
    private actions$: Actions,
    private _ps: PersonService,
    private dataMapper: PersonDataMapper
  ) { }
}