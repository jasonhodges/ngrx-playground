export namespace PersonModel {

  export interface Name {
    first: string;
    last: string;
  }

  export interface Outdoor {
    offroading: boolean;
    biking: boolean;
    snowboarding: boolean;
    hiking: boolean;
  }

  export interface Activities {
    outdoor: Outdoor;
  }

  export interface Friend {
    id: number;
    name: string;
    activities: Activities;
  }

  export interface Person {
    _id: string;
    index: number;
    age: number;
    name: Name;
    activities: Activities;
    friends: Friend[];
  }

}