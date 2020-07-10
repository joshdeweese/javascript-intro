let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let newArr = arr.map(function(value) {
  if (value.length % 2 !== 0) {
    return value.length;
  }
}).filter(value => value !== undefined)

console.log(arr)
console.log(newArr)

// book solution
function oddLengths(arr) {
  let filteredNumbersArray = arr.map((letters) => {
    return letters.length;
  }).filter((number) => {
    return number % 2 === 1;
  });
  return filteredNumbersArray;
}