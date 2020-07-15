console.log(greeting);

var greeting = 'Hello world!';

/*
* In this example, var is "hoisted", meaning
* it is moved to the beginning, so greeting is set
* but not assigned.*/

// Behaves like this:
var greeting;

console.log(greeting);

greeting = 'Hello world!'

/*In contrast, let variables are not accessable before they are declared.*/
//console.log(greeting);

//let greeting = 'Hello world!';

/****************/

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a); // this line doesn't reference the outer let because the inner let has precidence
    let a = 2; //let is not hosisted, so the line above can't reference it
    console.log(a);
  }
}

myFunction();