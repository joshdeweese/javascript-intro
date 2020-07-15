let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let array in vocabulary) {
  for (let item in vocabulary) {
    console.log(vocabulary[array][item]);
  }
}
