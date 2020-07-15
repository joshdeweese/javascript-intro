//
let s = "These aren't the droids you're looking for."
console.log(s.length)

let us = 'confetti floating everywhere'
console.log(us.toUpperCase())


// repeat string
function repeat(n, string) {
  let repetitions = '';

  while (n > 0) {
    repetitions += string;
    n -= 1;
  }

  return repetitions;
}

console.log(repeat(3, 'ha'))

// multiple line string
console.log('A pirate I was meant to be!\n' +
  'Trim the sails and roam the sea!')

// check if equal
let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';
console.log(string1.toUpperCase() === string2.toUpperCase());

// contains character
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(byteSequence.includes('x'))

// is blank
function isBlank(string) {
  return string.length === 0;
}

console.log(isBlank('mars'));
console.log(isBlank('  '));
console.log(isBlank(''));

// is blank but has whitespaces
function isBlankw(string) {
  return string.trim().length === 0;
}

console.log(isBlankw('mars'));
console.log(isBlankw('  '));
console.log(isBlankw(''));

// capitalize words
let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}

console.log(capitalizedWords.join(' ')); // 'Launch School Tech & Talk'
