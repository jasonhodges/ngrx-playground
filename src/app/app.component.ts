import { Component, OnInit } from '@angular/core';
import { PersonFacade } from '@ngrx-playground/persons/shared/store';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private _pf: PersonFacade,
  ) {}

  ngOnInit() {
    this._pf.loadPersonData();
  }
}
