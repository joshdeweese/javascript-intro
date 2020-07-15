let randomNumber = Math.round(Math.random());

if (randomNumber === 1) {
  console.log('Yes!');
} else {
  console.log('No.');
}

// 0 is falsy, so no need to use strict equality
if (randomNumber) {
  console.log('Yes!');
} else {
  console.log('No.');
}

// ternary

console.log(randomNumber ? 'Yes!' : 'No.');
