export interface Friend {
  id: string;
}

export interface Person {
  id: string;
  firstName: string;
  lastName: string
  popularActivities: string[];
  friends: Friend[] | Person[]; // Because of ternary check in persons.component.html:12
  activityToDo: string;
  activitySelected: boolean;
}


