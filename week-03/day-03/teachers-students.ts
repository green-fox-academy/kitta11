'use strict';

export class Teacher {

  teach(student: Student) {
  student.learn()
  }

  answer() {

  }
}

export class Student {
  
  learn() {
  }
  question(teacher: Teacher) {
    teacher.answer();
  }
}