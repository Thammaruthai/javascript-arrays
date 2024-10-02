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
  {
    name: "Alicia",
    age: 29,
    hobbies: ["Shopping", "Reading novels"],
  },
  {
    name: "Kody",
    age: 19,
    hobbies: ["Computer games", "Wakeboard"],
  },
];

// Start coding here
/* จากโค้ดใน Exercise #2 ให้เขียนโค้ดตามโจทย์ที่กำหนด
 */

employees.pop() /* ลบ Object ของพนักงานที่ชื่อ “Kody” ใน updateEmployees*/
console.log(employees); /* เมื่อลบข้อมูลเสร็จแล้วให้ console.log ดูค่าของ employees */