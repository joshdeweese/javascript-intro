let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (f in fish) {
  console.log(fish[f]);

  if (fish[f] === 'Nemo') {
    break;
  }
}