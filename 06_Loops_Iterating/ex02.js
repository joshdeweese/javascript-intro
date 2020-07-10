// Compute the factorial

function factorial(number) {
  let result = 1;
  for (let i = number; i > 0; i -= 1) {
    result = result * i;
  }
  return result;
}

console.log(factorial(4));

// with recursion

function factorial_recursion(number) {
  if (number <= 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

console.log(factorial_recursion(4));