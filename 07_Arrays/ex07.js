let numbers = [3,5,7];

let sumOfSquares = function(array) {
  return array.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0)
}

console.log(sumOfSquares(numbers));