if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}

if (true || false) {
  console.log('Yes!');
} else {
  console.log('No...');
}

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);