

export class Friend {
  constructor(
    public name: string,
    public popularActivities: Activity[]
  ) { }
}

export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public friends: Friend[],
    public popularActivities: Activity[],
    public activityToDo: string,
    public activitySelected: boolean
  ) { }
}

export interface Person {
  firstName: string;
  lastName: string
  popularActivities: Activity[];
  friends: Friend[];
  activityToDo: string;
  activitySelected: boolean;
}

export class Activity {
  constructor(
    public activity: string
  ) { }
}

