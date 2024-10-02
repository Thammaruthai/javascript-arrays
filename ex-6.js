const student = {
  name: "John Doe",
  grade: 12,
  subjects: ["Math", "Science", "History"],
};

/* ให้แก้ไข Error ที่เกิดจาก JavaScript โค้ดที่กำหนดให้ */

student.age=18;     /*student.age is not assign  */


console.log("Student Name: " + student.name);  /* ReferenceError: stdent is not defined  */
console.log("Student Age: " + student.age);
console.log("Student Grade: " + student.grade);  /*student.gade is incorrect determine  */
console.log("Student Subjects: " + student.subjects);
