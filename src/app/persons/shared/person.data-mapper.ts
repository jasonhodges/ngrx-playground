import { Injectable } from '@angular/core';
import { Person, Friend, Activity } from './store/person.model';

@Injectable({ providedIn: 'root' })
export class PersonDataMapper {
  Person = Person;
  persons: Person[] = [];
  friends: Friend[] = [];


  getHighestFriendActivity(data: any): Person[] {
    data.map((person) => {
      this.persons.push(new Person(
        person.name.first,
        person.name.last,
        this.getFriends(person.friends),
        this.getPopularActivities(person)
      ))
    });
    return this.persons;
  }

  getFriends(d) {
    let friends: Friend[] = [];
    d.forEach((f) => {
      friends.push(new Friend(f.name, this.getPopularActivities(f)))
    })
    return friends;
  }

  getPopularActivities(a) {
    let personActivityCategories = Object.keys(a.activities);
    let personActivities = a.activities[personActivityCategories[0]];
    let personPopularActivities: Activity[] = [];
    Object.keys(personActivities).forEach(act => {
      personActivities[act] === true ? personPopularActivities.push({ activity: act }) : '';
    })
    return personPopularActivities;
  }
}

