import { Person } from "./person"
'use strict'

export class Sponsor extends Person {
  private company: string;
  private hiredStudents: number;

  constructor(name?: string, age?: number, gender?: string, company: string = 'Google') {
    super(name, age, gender)
    this.company = company;
    this.hiredStudents = 0;
  }

  introduce() {
    console.log(`${super.getIntroText()}, who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  getGoal() {
    console.log('Hire brilliant junior software developers.')
  }

  hire() {
    this.hiredStudents++;
  }
}