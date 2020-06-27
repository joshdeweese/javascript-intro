console.log("Hello, world!");

var golfScore = (strokes) => {
  par = 76;
  overUnder = strokes - par;
  if (strokes > par) {
    return overUnder + ' over par';
  } else if (strokes === par) {
    return 'Even';
  } else {
    return overUnder * -1 + ' under par';
  }
}

console.log(golfScore(72));