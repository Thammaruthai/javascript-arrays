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
let alex = employees[1].name;
console.log(alex);

let alexHobbies = employees[1].hobbies;
console.log(alexHobbies);

let alexAndJamesAge = employees[1].age + employees[0].age;
console.log(alexAndJamesAge);
