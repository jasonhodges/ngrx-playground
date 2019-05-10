import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PersonDataMapper {
  persons: Person[] = [];
  friends: Friend[] = [];


  getHighestFriendActivity(data: any) {
    console.log(`data: ${JSON.stringify(data)}`);
    console.log(`friends: ${JSON.stringify(data[0].friends)}`)

    data.map((person) => {
      console.log(person)
      
      this.persons.push(new Person(
        person.name.first,
        person.name.last,
        this.getFriendName(person.friends),
        this.getPopularActivity(person, person.friends)
      ))
    })
    console.log('persons: ', this.persons);
    data[0].friends.forEach((friend) => {
      console.log(friend)
      this.friends.push(new Friend(friend.name));
    })
    return this.friends;
  }

  getFriendName(d) {
    let friendNames: [] = [];
    d.forEach((f) => {
      friendNames.push(new Friend(f.name))
    })
    return friendNames;
  }

  getPopularActivity(a, f) {
    console.log(`person activities: `, a.activities)
    let personActivityCategories = Object.keys(a.activities);
    let personActivities = a.activities[personActivityCategories[0]];
    let personPopularActivities: [] = [];
    Object.keys(personActivities).forEach(act => {
      console.log('act', act)
      console.log(personActivities[act])
      personActivities[act] === true ? personPopularActivities.push(act) : '';
    })


    console.log(`personActivityCategories: `, personActivityCategories)
    console.log('personActivities: ', personActivities);
    console.log('personPopularActivities: ', personPopularActivities);

    console.log('friends', f);
  }
}

export class Friend {
  constructor(
    public name: string
  ) { }
}

export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public friends: Friend[],
    public popularActivity: string
  ) { }
}