let bar = 1;

function foo() {
  // "let bar =" would create a new variable in the function
  bar = 2;
}

foo();
console.log(bar);
