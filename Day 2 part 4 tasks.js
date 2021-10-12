//1

let strictA = true;
let strictB = 1;

console.log(strictA == strictB); //true
console.log(strictA === strictB); //false

//2

console.log(strictA != strictB); //false
console.log(strictA !== strictB); //true

//3

let age = 22;

if (age >= 18 && age <= 65) {
  console.log("Age is between 18 and 65");
} else if (age < 18) {
  console.log("Under 18");
} else {
  console.log("Over 65");
}

//4

let age1 = 45;
let result = age1 >= 50 ? "50 or over" : "Under 50";
console.log(result);
