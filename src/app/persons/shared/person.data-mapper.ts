import { Injectable } from '@angular/core';
import { Person, Friend, Activity } from './store/person.model';

@Injectable({ providedIn: 'root' })
export class PersonDataMapper {
  Person = Person;
  ids: string[] = [];
  persons: Person[] = [];
  friends: Friend[] = [];


  buildPerson(data: any): Person[] {
    data.map((person) => {
      this.ids.push(
        person.name.first + ' ' + person.name.last
      );
      this.persons.push(new Person(
        person.name.first + ' ' + person.name.last,
        person.name.first,
        person.name.last,
        this.getFriends(person.friends),
        this.getPopularActivities(person),
        '',
        ''
      ))
    });
    console.log(`ids: ${this.ids}`);
    console.log(`persons: ${JSON.stringify(this.persons)}`)
    return this.persons;
  }

  getFriends(d) {
    let friends: Friend[] = [];
    d.forEach((f) => {
      let name = f.name.split(' ');
      this.ids.push(name[0] + ' ' + name[1]);
      friends.push(new Friend(
        name[0] + ' ' + name[1]
        )
      )
      this.persons.push(new Person(
        name[0] + ' ' + name[1],
        name[0],
        name[1],
        [],
        f.popularActivities,
        '',
        ''
      ))
    })
    return friends;
  }

  getPopularActivities(a) {
    let personActivityCategories = Object.keys(a.activities);
    let personActivities = a.activities[personActivityCategories[0]];
    let personPopularActivities: string[] = [];
    Object.keys(personActivities).forEach(act => {
      console.log(`act: ${act}`)
      personActivities[act] === true ? personPopularActivities.push(act) : '';
    })
    return personPopularActivities;
  }
}

