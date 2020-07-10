// Recursive fibonacci function

function fibonacci(number) {
  if (number < 2) {
    return number;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

console.log(fibonacci(20)); // the 6th fibonacci number is 8 (0, 1, 1, 2, 3, 5, 8)