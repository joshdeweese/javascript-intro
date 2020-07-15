let greet = function (greeting = 'Hello', recipient = 'world') {
  console.log(greeting + ' ' + recipient + '!');
}

greet();
greet('Salutations');
greet('Good morning', 'launch school');