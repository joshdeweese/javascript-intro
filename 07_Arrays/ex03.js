let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(function(value) {
  value.forEach(function(n){
    if (n % 2 === 0) {
      console.log(n)
    }
  })
});