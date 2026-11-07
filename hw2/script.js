// task1
let YourName = prompt("What is your name?");
    alert (`Hello ${YourName} ! How are you?`);


// task2 
let sum = 10 + 20;
let min = 20 - 1;
let ymn = 3 * 3;
let del = 30 / 10;
console.log(sum)
console.log(min)
console.log(ymn)
console.log(del)

// task 3
let a = 20;
let b = 30;

if (a === b){
    alert(true);
}
else{
    alert(false)
}

// task4 
let task4a = 10;
let task4b = 20;
let task4c = 30;

let result = (task4a + task4b + task4c) / 3;
console.log(result)

// task5
let num = 58317;

let digit1 = Math.floor(num / 10000);
let digit2 = Math.floor(num / 1000) % 10;
let digit3 = Math.floor(num / 100) % 10;
let digit4 = Math.floor(num / 10) % 10;
let digit5 = num % 10;

console.log(digit1, digit2, digit3, digit4, digit5);

