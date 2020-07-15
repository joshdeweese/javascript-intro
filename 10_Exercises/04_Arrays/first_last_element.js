planets = ['Earth', 'Moon', 'Mars'];

function returnFirst(array) {
  return array[0];
}

function returnLast(array) {
  return array[array.length - 1];
}

console.log(returnFirst(planets));
console.log(returnLast(planets));