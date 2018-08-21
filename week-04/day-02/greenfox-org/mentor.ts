import { Person } from "./person"
'use strict'

export class Mentor extends Person {
  private level: string;

  constructor(name?: string, age?: number, gender?: string, level: string = 'intermediate') {
    super(name, age, gender)
    this.level = level;
  }

  introduce() {
    console.log(`${super.getIntroText()}, ${this.level} mentor`);
  }

  getGoal() {
    console.log('Educate brilliant junior software developers.')
  }
}