'use strict'
export class Person {
  //protected means that only this and its child class can access it
  protected name: string;
  protected age: number;
  protected gender: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
    // if (gender==="male"|| gender==="female") {
    //   throw new Error('Please check your gender selection!')
    // }
    this.name = name;
    this.age = age;
    this.gender = gender;
    
  }

  introduce() {
    console.log(`Hi, I am ${this.name}, a ${this.age} year old ${this.gender}.`);
  }

  getGoal() {
    console.log('My goal is: Live for the moment!')
  }

  getIntroText() {
    return `Hi, I am ${this.name}, a ${this.age} year old ${this.gender}`
  }
}