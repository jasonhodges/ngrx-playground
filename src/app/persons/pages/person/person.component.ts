import { Component, OnInit, Input } from '@angular/core';
import { PersonFacade } from '../../shared/store';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() selectedPerson: string;
  constructor(public pf: PersonFacade) { }

  ngOnInit() {
  }

}