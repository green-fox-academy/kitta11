import { Animal } from "./animal";
'use strict';

export class Reptile extends Animal {
  likeEatingPeople: boolean;

  constructor(name: string, likeEatingPeople: boolean = false) {
    super(name);
    this.breedingMethod = 'laying eggs';
    this.likeEatingPeople = likeEatingPeople;
    this.favFood = 'meat and fish and green stuff'
  }

  feed(){
    if (this.likeEatingPeople) {
      super.feed()
      console.log(`BUT what I would really love to eat is YOU my dear human!`)
    } else {
      super.feed()
    }
  }
}