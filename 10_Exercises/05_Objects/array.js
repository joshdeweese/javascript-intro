let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = Object.keys(vehicle);
console.log(keys);

let values = Object.values(vehicle);
console.log(values);

// convert to nested array
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedPerson = Object.entries(person);
console.log(nestedPerson);

// convert to object
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let personObject = {};

for (let i = 0; i < nestedArray.length; i++) {
  let pair = nestedArray[i];
  personObject[pair[0]] = pair[1];
}
console.log(personObject);