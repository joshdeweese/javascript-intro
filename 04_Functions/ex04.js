function times(number1, number2) {
  let result = number2 * number1;
  console.log(result);
  return result;
}

let one = times(1,1);
let two = times(one, 2);
let three = times(two, 3);
let four = times(three, 4);
let five = times(four, 5);