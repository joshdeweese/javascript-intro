let moreThanTen = function (n) {
  if (n.length > 10) {
    return n.toUpperCase();
  } else {
    return n;
  }
}

console.log(moreThanTen('hello world'))
console.log((moreThanTen('goodbye')))