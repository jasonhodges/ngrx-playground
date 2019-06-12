import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PersonService {
  friends: any;
  private _personURL = 'assets/person-activities-friends.json';

  constructor(private _http: HttpClient) { }

  loadPersonData() {
    console.log('loadPersonData called')
    return this._http.get(this._personURL)
  }
}
