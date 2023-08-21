#! /usr/bin/env node
"use strict";
//  class Student {
//   private name: string;
//   private courses: string[];
//   constructor(name: string) {
//     this.name = name;
//     this.courses = [];
//   }
//   addCourse(course: string): void {
//     this.courses.push(course);
//     console.log(`Added course "${course}" for student ${this.name}.`);
//   }
//   displayInfo(): void {
//     console.log(`Student Name: ${this.name}`);
//     console.log('Courses:');
//     this.courses.forEach(course => {
//       console.log(`- ${course}`);
//     });
//   }
// }
// const students: Student[] = [];
// function addStudent(name: string): void {
//   const student = new Student(name);
//   students.push(student);
//   console.log(`Added student ${name}.`);
// }
// function displayStudentInfo(name: string): void {
//   const student = students.find(s => s.getName() === name);
//   if (student) {
//     student.displayInfo();
//   } else {
//     console.log(`Student ${name} not found.`);
//   }
// }
// console.log('Student Management System\n');
// addStudent('John Doe');
// addStudent('Jane Smith');
// students[0].addCourse('Math');
// students[0].addCourse('Science');
// students[1].addCourse('History');
// displayStudentInfo('John Doe');
// displayStudentInfo('Jane Smith');
// displayStudentInfo('Alice');
///////////////////////////////////////////////////////////
//Defining the Structure
class Person {
    name;
}
class Student extends Person {
    course;
    rollNumber;
}
class Teacher extends Person {
    course;
}
class Course {
    courseName;
    classTeacher;
    students;
    timing;
}
//Creating Students individually 
let student1 = new Student();
student1.name = "Student1";
student1.rollNumber = "1";
let student2 = new Student();
student2.name = "Student2";
student2.rollNumber = "2";
let student3 = new Student();
student3.name = "Student3";
student3.rollNumber = "3";
const stdArray = [student1, student2, student3];
//Created a Teacher Object
let teacher = new Teacher();
teacher.name = "Teacher 1";
let courseGIAIC = new Course();
courseGIAIC.courseName = "GIAIC";
courseGIAIC.classTeacher = teacher;
courseGIAIC.students = stdArray;
courseGIAIC.timing = "6-10";
teacher.course = courseGIAIC;
student1.course = teacher.course;
student2.course = teacher.course;
student3.course = teacher.course;
console.log(courseGIAIC);
console.log(teacher);
console.log(stdArray);
console.log(teacher.course);
// //Created an Array of Students 
// const stdArray:Student[]=[student1,student2,student3];
// course.students=stdArray;
// //Printing the Structure of how the course will be looking in the memory.
// console.log(course);
// //Changed to timing to see is it Pass by Value or Pass By Reference
// teacher.timing="10-11";
// console.log(course);
