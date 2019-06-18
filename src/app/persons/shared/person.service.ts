import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PersonService {
  private _personURL = 'assets/person-activities-friends.json';

  constructor(private _http: HttpClient) { }

  loadPersonData() {
    return this._http.get(this._personURL)

  }
}
