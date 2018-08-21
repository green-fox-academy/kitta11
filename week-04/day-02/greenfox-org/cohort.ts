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
    let newStudent: Student = new Student();
    this.studentList.push(newStudent);
  }

  addMentor(Mentor) {
    let newMentor: Mentor = new Mentor();
    this.mentorList.push(newMentor);

  }

  info() {
    console.log(`The name cohort has ${this.studentList.length} students and ${this.mentorList.length} mentors.`)
  }
}