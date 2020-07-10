let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
// Desired result:
//  [
//    'odd', 'odd', 'even', 'odd',
//    'even', 'even', 'even', 'odd',
//    'odd', even', 'even',
//  ]

let newArray = []
myArray.forEach(function(value) {
  if (value % 2 === 0) {
    newArray.push('even')
  } else {
    newArray.push('odd')
  }
  //newArray.push(value);
});

// using map

let newArrayMap = myArray.map(function(value) {
  if (value % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

console.log(myArray);
console.log(newArray);
console.log(newArrayMap);