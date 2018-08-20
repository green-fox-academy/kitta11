'use strict'
export class Person {
  private name: string;
  private age: number;
  private gender: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hi, I am ${this.name}, a ${this.age} year old ${this.gender}`);
  }

  getGoal() {
    console.log('My goal is: Live for the moment!')
  }
}

export class Student {
  private name: string;
  private age: number;
  private gender: string;
  private previousOrganization: string;
  private skippedDays: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School of Life') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;

  }

  introduce() {
    console.log(`Hi, I am ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already`);
  }

  getGoal() {
    console.log('Be a junior software developer.')
  }

  skipDays(numberOfDays) {
    this.skippedDays += numberOfDays;
  }
}

export class Mentor {
  private name: string;
  private age: number;
  private gender: string;
  private level: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }

  introduce() {
    console.log(`Hi, I am ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor`);
  }

  getGoal() {
    console.log('Educate brilliant junior software developers.')
  }
}

export class Sponsor {
  private name: string;
  private age: number;
  private gender: string;
  private company: string;
  private hiredStudents: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
    this.hiredStudents = 0;
  }

  introduce() {
    console.log(`Hi, I am ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far`);
  }

  getGoal() {
    console.log('Hire brilliant junior software developers.')
  }

  hire() {
    this.hiredStudents++;
  }
}

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
people.push(sponsor);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}