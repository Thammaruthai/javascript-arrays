const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];

// Start coding here

/* จากโค้ดใน Exercise #2 ให้เขียนโค้ดตามโจทย์ที่กำหนด
ให้เพิ่มข้อมูลของพนักงาน 2 คนที่อยู่ในรูปแบบของ Object เข้าไปใน Array ที่ชื่อ employees
ซึ่ง Object จะมี Property ดังนี้
*/

/* พนักงานคนที่ 1 มี Property ของ Object ดังนี้
Key name มี Value เป็น "Alicia"
Key age มี Value เป็น 29
Key hobbies มี Value เป็น “Shopping" และ “Reading novels" */
employees.push({
  name: "Alicia",
  age: 29,
  hobbies: ["Shopping", "Reading novels"],
});


/* พนักงานคนที่ 2 มี Property ของ Object ดังนี้
Key name มี Value เป็น "Kody"
Key age มี Value เป็น 19
Key hobbies มี Value เป็น “Computer games" และ “Wakeboard" */ 
employees.push({
  name: "Kody",
  age: 19,
  hobbies: ["Computer games", "Wakeboard novels"],
});

/* เมื่อเพิ่มพนักงานเสร็จแล้ว ให้ console.log เพื่อดูค่าของ Array employees */
console.log(employees);

