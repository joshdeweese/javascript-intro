function mp(first, second) {
  return first * second;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber("First number:");
let right = getNumber("Second number: ");
console.log(`${left} * ${right} = ${left * right}`)