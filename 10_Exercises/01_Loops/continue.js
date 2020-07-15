let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

let index = 0

for (index in cities) {
  if (cities[index] == null){
    continue;
  }
  console.log(cities[index]);
}