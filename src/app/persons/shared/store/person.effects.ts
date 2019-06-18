import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fromEvent } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { PersonDataMapper } from '../person.dto';
import { PersonService } from '../person.service';
import { PersonActions } from './person.actions';

@Injectable()
export class PersonEffects {
  @Effect()
  loadPersonData$ = this.actions$.pipe(
    ofType(PersonActions.loadPersonData.type),
    mergeMap(() => this._ps
      .loadPersonData()
      .pipe(
        map((response) => this.dataMapper.buildPerson(response)),
        map((data) => PersonActions.personDataLoadedSuccess({ids: data.ids, persons: data.persons}))
      )
    )
  );

  @Effect({ dispatch: false })
  personClick$ = fromEvent(document, 'click').pipe(
    map(() => {console.log('clicked')}));

  constructor(
    private actions$: Actions,
    private _ps: PersonService,
    private dataMapper: PersonDataMapper
  ) { }
}
