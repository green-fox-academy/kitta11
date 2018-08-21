import { Person } from "./person"
'use strict'

export class Student extends Person {

  private previousOrganization: string;
  private skippedDays: number;

  constructor(name: string= 'Mark', age?: number, gender?: string, previousOrganization: string = 'The School of Life') {
    //we call the Person constructor in order to create "a Person who is Student too" that is 
    //how we can use the parent methods
    super(name, age, gender);
    //super() vs super(properties list) in case of the first it will bring the default values of the parent
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }

  introduce() {
    console.log(`${super.getIntroText()}, from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }
  //getGoal method override
  getGoal() {
    console.log('Be a junior software developer.')
  }

  skipDays(numberOfDays) {
    this.skippedDays += numberOfDays;
  }
}

