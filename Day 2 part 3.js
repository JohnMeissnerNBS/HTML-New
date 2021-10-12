/*

? ASI and ITERATION

*Automatic
* Semi colon
* Insertion

Javascript automatically inserts semi colons for us.
This can lead to unwanted behaviour

*/

// multiline maths (no semi colons)

let a = 1
let b = 1

a
++ //increment by one
b

console.log("a = ${a}, b = ${b}")

// TODO : fix this! :)

let c = 1;
let d = 1;

c;
++
d;

console.log("c = ${c}, d = ${d}");

// ? ITERATION

// * LOOPS

// ! FOR loop
// use a counter
// run while a condition is met

for(let i = 0; i < 10; i++) {
    console.log("i = ${i}");
}

// WHILE Loop
// works with boolean
// runs until a conditon is no longer true

let condition = true;
let increment = 0;

while(condition) {
    console.log("increment me!")
    increment++;

    if(increment ==3) {
        condition = false;
    }
}

// DO WHILE loop
// like a  while loop but always runs at least once

let condition = true;
let increment = 0;

do {
    console.log("do while loop")
    increment++

    if(increment == 3) {
        condition = false;
    }
} while(con);

// SWITCH CASES
// run until break or return
// more effective than large if-else trees

let number = 1;

switch(number) {
    case 0:
        console.log("we are at zero");
        break;
    case 1:
        console.log("number is 1");
    case 4:
        console.log("4 now");
    case 10:
        console.log("at the end");
        break;
    default:
        console.log("this is the default");

}

