import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { PersonState, PersonActions, PersonModel} from './store';
import { PersonDataMapper } from './person.data-mapper';

@Injectable({ providedIn: 'root' })
export class PersonService {
  friends: any;
  private _personURL = 'assets/person-activities-friends.json';

  constructor(
    private _http: HttpClient, 
    private _dataMapper: PersonDataMapper,
    private store: Store<PersonState.IState>) { }

  // loadPersonData() {
  //   let personSubscription$ = this._http.get(this._personURL).subscribe((data: PersonModel.Person[]) => {
  //     console.log(`get Person data:`, data),
  //     this.store.dispatch(PersonActions.loadPersonData({persons: data}))
  //     this.friends = this._dataMapper.getHighestFriendActivity(data),
  //     console.log('friend names: ', JSON.stringify(this.friends));
  //   });
  // }
  loadPersonData() {
    console.log('loadPersonData called')
    return this._http.get(this._personURL)
    // .subscribe((data: PersonModel.Person[]) => {
      // return data;
    // });
  }
}