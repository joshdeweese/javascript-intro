let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;
// && has higher operator precedence than ||

console.log(isMoving);