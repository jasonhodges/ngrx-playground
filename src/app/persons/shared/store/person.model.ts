

export class Friend {
  constructor(
    public id: string,
    public name: string,
    public popularActivities: string[]
  ) { }
}

export class Person {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public friends: Friend[],
    public popularActivities: string[],
    public activityToDo: string,
    public activitySelected: boolean
  ) { }
}

export interface Person {
  id: string;
  firstName: string;
  lastName: string
  popularActivities: string[];
  friends: Friend[];
  activityToDo: string;
  activitySelected: boolean;
}

export class Activity {
  constructor(
    public activity: string
  ) { }
}

