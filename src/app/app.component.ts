import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PersonState, PersonModel, PersonSelectors, PersonFacade } from './persons/shared/store';
import { Observable } from 'rxjs';
import { PersonService } from './persons/shared/person.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private _pf: PersonFacade,
    private store: Store<PersonState.IState>
  ) {}

  ngOnInit() {
    this._pf.loadPersonData();
    
  }
}
