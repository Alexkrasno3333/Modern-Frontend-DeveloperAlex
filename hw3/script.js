// task1
let task1a = 10;
let task1b = 20;

if (task1a > task1b){
    console.log("Більше число: 20")
}else{
    console.log("Менше число: 10")
}
// task2
let km = 2;
let feet = 5000;

let kmToMeters = km * 1000;
let feetToMeters = feet * 0.305;

if (kmToMeters < feetToMeters) {
    console.log("Відстань у кілометрах менша");
} else {
    console.log("Відстань у футах менша");
}

// task3
let task3a = 10;
let task3b = 2;

if (task3b) {
    console.log("a є дільником b");
} else {
    console.log("a не є дільником b");
}

if (task3a % task3b === 0) {
    console.log("b є дільником a");
} else {
    console.log("b не є дільником a");
}

// task4
let task4 = 137;
let lastDigit = task4 % 10;

console.log("Остання цифра:", lastDigit);

if (lastDigit % 2 === 0) {
    console.log("Остання цифра парна");
} else {
    console.log("Остання цифра непарна");
}
// task5

let num5 = 47;

let firstDigit5 = Math.floor(num / 10);
let secondDigit5 = num % 10;

if (firstDigit5 > secondDigit5) {
    console.log("Перша цифра більша:", firstDigit5);
} else if (secondDigit5 > firstDigit5) {
    console.log("Друга цифра більша:", secondDigit5);
} else {
    console.log("Цифри рівні");
}

// task6
let num6 = 357;

let firstDigit6 = Math.floor(num / 100);
let secondDigit6 = Math.floor(num / 10) % 10;
let thirdDigit = num % 10;


let sum = firstDigit6 + secondDigit6 + thirdDigit;

if (sum % 2 === 0) {
    console.log("Сума цифр парна");
} else {
    console.log("Сума цифр непарна");
}

if (sum % 5 === 0) {
    console.log("Сума цифр кратна п'яти");
} else {
    console.log("Сума цифр не кратна п'яти");
}

let multiplication = firstDigit6 * secondDigit6 * thirdDigit;

if (multiplication > 100) {
    console.log("Добуток цифр більше 100");
} else {
    console.log("Добуток цифр не більше 100");
}
// task7
let num = 555;

let firstDigit = Math.floor(num / 100);
let secondDigit = Math.floor(num / 10) % 10;
let thirdDigit7 = num % 10;

if (firstDigit === secondDigit && secondDigit === thirdDigit7) {
    console.log("Всі цифри однакові");
} else {
    console.log("Не всі цифри однакові");
}

if (
    firstDigit === secondDigit ||
    firstDigit === thirdDigit7 ||
    secondDigit === thirdDigit7
) {
    console.log("Є однакові цифри");
} else {
    console.log("Усі цифри різні");
}
// task8
let num8 = 123321;

let firstDigit8 = Math.floor(num / 100000);
let secondDigit8 = Math.floor(num / 10000) % 10;
let thirdDigit8 = Math.floor(num / 1000) % 10;

let fourthDigit8 = Math.floor(num / 100) % 10;
let fifthDigit8 = Math.floor(num / 10) % 10;
let sixthDigit8 = num % 10;

if (
    firstDigit8 === sixthDigit8 &&
    secondDigit8 === fifthDigit8 &&
    thirdDigit8 === fourthDigit8
) {
    console.log("Число дзеркальне");
} else {
    console.log("Число не дзеркальне");
}
