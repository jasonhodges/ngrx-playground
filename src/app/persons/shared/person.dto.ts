import { Injectable } from '@angular/core';
import { Friend, Person } from '@ngrx-playground/persons/shared/store';

@Injectable({ providedIn: 'root' })
export class PersonDataMapper {
  ids: string[] = [];
  persons: Person[] = [];
  friends: Friend[] = [];


  buildPerson(data: any): any {
    data.map((person: any) => {
      this.ids.push(
        person.name.first + ' ' + person.name.last
      );
      this.persons.push({
        id: person.name.first + ' ' + person.name.last,
        firstName: person.name.first,
        lastName: person.name.last,
        friends: this.getFriends(person.friends),
        popularActivities: this.getPopularActivities(person),
        activityToDo: '',
        activitySelected: false,
      })
    });
    // console.log(`ids: ${this.ids}`);
    // console.log(`persons: ${JSON.stringify(this.persons)}`);
    return {ids: this.ids, persons: this.persons}
  }

  getFriends(d: any) {
    let friends: any = [];
    d.forEach((f: any) => {
      let name = f.name.split(' ');
      this.ids.push(name[0] + ' ' + name[1]);
      friends.push(
        name[0] + ' ' + name[1]
      );
      this.persons.push({
        id: name[0] + ' ' + name[1],
        firstName: name[0],
        lastName: name[1],
        friends: [],
        popularActivities: this.getPopularActivities(f),
        activityToDo: '',
        activitySelected: false
      })
    });
    return friends;
  }

  getPopularActivities(a: any) {
    let personActivityCategories = Object.keys(a.activities);
    let personActivities = a.activities[personActivityCategories[0]];
    let personPopularActivities: string[] = [];
    Object.keys(personActivities).forEach(act => {
      personActivities[act] === true ? personPopularActivities.push(act) : '';
    });
    return personPopularActivities;
  }
}

