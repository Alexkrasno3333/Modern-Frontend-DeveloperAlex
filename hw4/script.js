// task1
for (i = 20;i <= 30;i += 0.5){
    console.log(i)
}
// task2
for (i = 10; i <= 100; i += 10){
    console.log(i * 40)
}
// task3

const N = 30;

for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        console.log(i);
    }
}
// task4
const n = 7;
let isPrime = true;

if (n <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? "Просте" : "Не просте");
// task5

const n1 = 81;
let number = 1;

while (number < n1) {
    number *= 3;
}

if (number === n1) {
    console.log("Так, можна");
} else {
    console.log("Ні, не можна");
}