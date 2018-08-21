import { Student} from "./student";
import { Mentor} from "./mentor"

'use strict'

export class Cohort {
  name: string;
  studentList: Student[];
  mentorList: Mentor[];

  constructor(name: string){
    this.name = name;
    this.studentList = [];
    this.mentorList = [];
  }
  addStudent(Student) {
    this.studentList.push(Student);
  }

  addMentor(Mentor) {
    this.mentorList.push(Mentor);

  }

  info() {
    console.log(`The ${this.name} cohort has ${this.studentList.length} students and ${this.mentorList.length} mentors.`)
  }
}