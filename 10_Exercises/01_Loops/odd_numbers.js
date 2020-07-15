let num = 1
while (num <= 40) {
  if (num % 2 === 0) {
    num += 1;
    continue;
  }
  console.log(num);
  num += 1;
}

// Better solution

let number = 1;

while (number < 40) {
  console.log(number);
  number += 2;
}