/* กำหนดให้ employees เป็น Array ที่บรรจุ Object ที่แสดงคุณสมบัติของพนักงาน
Object จะมี Property ดังนี้
Key name เก็บข้อมูลชื่อของพนักงาน มีชนิดข้อมูลเป็น String
Key age เก็บข้อมูลอายุของพนักงาน มีชนิดข้อมูลเป็น Number
Key hobbies เก็บข้อมูลงานอดิเรกของพนักงาน มีชนิดข้อมูลเป็น Array */

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
let alex=employees[1].name;           /* กำหนดให้ Variable alex มีค่าเท่ากับ Value ที่มาจาก Key name ของพนักงานที่ชื่อ Alex */
let alexHobbies=employees[1].hobbies; /* กำหนดให้ Variable alexHobbies มีค่าเท่ากับ Value ที่มาจาก Key hobbies ของพนักงานที่ชื่อ Alex */
let alexAndJamesAge=employees[1].age+employees[0].age; /* กำหนดให้ Variable alexAndJamesAge มีค่าเท่ากับอายุของ Alex และ James รวมกัน */


/*จากนั้นให้ console.log ค่าที่อยู่ใน Variable alex, alexHobbies และ alexAndJamesAge ออกมาทางหน้าจอแล้วสังเกตผลลัพธ์ */
console.log(alex);
console.log(alexHobbies);
console.log(alexAndJamesAge);


