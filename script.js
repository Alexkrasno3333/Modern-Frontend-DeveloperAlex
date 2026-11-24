let numbers = [12, 5, 8, 21, 44, 9];
let result = numbers.pop();
console.log(result);

let fruits = ["apple", "banana", "orange", "kiwi", "pear"];

let result1 = fruits.length;

console.log(result1);

let colors = ["red", "green", "blue", "yellow"];

let result2 = colors.splice(1, 1, "black");

console.log(result2);
console.log(colors);

let numbers2 = [3, 8, 11, 14, 20, 7, 6];

for (i = 0; i < numbers2.length; i++) {
  if (numbers2[i] % 2 === 0) {
    console.log(numbers2[i]);
  }
}

let numbers3 = [10, 20, 5, 15, 30];
let count = 0;

for (i = 0; i < numbers3.length; i++) {
  count += numbers3[i];
}
console.log(count);

let numbers4 = [45, 120, 67, 250, 99, 101];
let result4 = [];

for (i = 0; i < numbers4.length; i++) {
  if (numbers4[i] > 100) {
    result4.push(numbers4[i]);
  }
}
console.log(result4);

let users = [
  { name: "Alex", age: 19 },
  { name: "Max", age: 16 },
  { name: "Anna", age: 22 },
  { name: "Oleg", age: 17 },
];
const filterUsers = users.filter((user) => user.age > 18);

console.log(filterUsers);

let users1 = [
  { name: "Alex", phone: "111" },
  { name: "Max", phone: "222" },
  { name: "Anna", phone: "333" },
];
const mapUsers = users1.map((user) => user.phone);

console.log(mapUsers);

let users2 = [
  { name: "Alex", balance: "$1,500" },
  { name: "Max", balance: "$3,200" },
  { name: "Anna", balance: "$2,700" },
  { name: "Oleg", balance: "$800" },
];

const mapFilterUser = users2
  .filter((user) => Number(user.balance.replace(/[$,]/g, "")) > 2000)
  .map((user) => user.name);
console.log(mapFilterUser);

let numbers7 = [4, 7, 2, 7, 9, 4, 1, 7];
let result7 = [];

for (i = 0; i < numbers7.length; i++) {
  if (!result7.includes(numbers7[i])) {
    result7.push(numbers7[i]);
  }
}
console.log(result7);
