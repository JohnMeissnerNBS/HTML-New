
//1
/*
Write the following code and assess the output

Create a function
Declare a variable with a value inside it (i.e. let x = 'foo')
Write an if statement that checks if the variable meets a condition
Inside create a local variable
Try to access both variables and asses your output

*/

function task1()
{
    let a = 1;
    if (a == 1)
    { 
        let b = 2;
    }

    console.log(a);
    console.log(b);
}

task1();

//2
/*
What is the result of executing this code and why?
*/

//a is not declared so this will throw an error

function doSomething() {
    // let a = 1; needs to be referenced here before it is used below in consol.log(a);
    console.log(a);
    console.log(foo());
    let a = 1; // shouldnt be referenced here
    function foo() {
      return 2;
    }
  }
  doSomething();