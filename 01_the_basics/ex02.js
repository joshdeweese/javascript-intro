// First attempt:
n = 4936;
let thousandsA = (n - (n % 1000))/1000;
let hundredsA = ((n - (n % 100))/100) - (thousandsA * 10);
let tensA = (n - (n % 10))/10 - (thousandsA * 100) - (hundredsA * 10);
let onesA = n - (thousandsA * 1000) - (hundredsA * 100) - (tensA * 10);
console.log(thousandsA);
console.log(hundredsA);
console.log(tensA);
console.log(onesA);

// Correct way:
let number = 4936
let ones = number % 10
console.log(ones)

number = (number - ones) / 10

let tens = number % 10
console.log(tens)

number = (number - tens) / 10

let hundreds = number % 10
console.log(hundreds)

let thousands = (number - hundreds) / 10
console.log(thousands)

