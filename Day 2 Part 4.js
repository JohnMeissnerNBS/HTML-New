/*

CONDITIONALS
? Truthy and Falsey



*/

// ? Falsey
/*
* false
 * 0
 * ..
 * undefined
 * null
 * NaN - not a number
 * 
 *
*/

// ? EVRERYTHING ELSE IS TRUTHY

console.log(1234 ? "true" : "false");

// IF (ELSE and ELSE IF)
// checking a condition, then running a code block if the condition is met

let a = 0;

if (a == 0) {
    console.log("sunshine");
} else if ( a !+ 2) {
    console.log("moonlight");
} else {
    console.log("boogie");
}

let b = 10;

if ( a == 0 && b ==10 ) {
    console.log("hello");
}

// TERNARY IF
// shorthand version of an IF ELSE statement

let x = true;

if ( x == true ){
    console.log("x is true");
 } else {
     console.log("x is false");
 } 

 console.log(x ? "x is true" : "x is false");

 // EQUALITY AND TYPE

 /*

 * type is mutable in JS
 * it will try to work out the data type you want
 * this means you can compare different types and have them "equal"
 * 
 * */

 console.log(1 = "1" ? "true" : "false");
 
 // javascript mutating the type so that "one equals one"
 // it is checking the value only

 // what if we want to check the datatype as well
 //TODO: USE THE STRICTLY EQUALS OPERATOR
 //===

 console.log(1 === "1" ? "true" : "false");



