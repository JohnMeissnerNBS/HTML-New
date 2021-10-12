/*

USE STRICT and CONSOLE

* ECMA Script 5 - european computer manufacturers association
* ES6 we no longer need to use  "use strict"
if you used to use bad syntax or protected keywords it wouldnt throw errros, now it does
*you cant accidentially create a global variable
*cant assign values to a non-writeable property
*cant use protected keywords

*/
"use strict"

//! protected keyword example
// let let = 2;

console.log("hello world!");

// ? There are a few types of console outputs we can use!

let text = "this is a message";

console.log(text);

console.info(text);

console.warn(text);

console.error(text);

// you can also use the console to output objects and all other data types.

// you can also style the console however you like!

console.log("%c" + text, "color: black;background-color: white;font-size: 20px; padding: 5px;")

//you can call more than one style
// but you have to call them in order

console.log("%c" + text + "" + "%c" + text, "color:red;" , "color:green;");




