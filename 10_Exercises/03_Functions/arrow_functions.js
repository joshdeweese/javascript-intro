const template = 'I VERB NOUN.';

function sentence(verb, noun) {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

console.log(sentence('like', 'birds'));


let sentenceArrow = (verb, noun) => template.replace('VERB', verb).replace('NOUN', noun);
console.log(sentenceArrow('like', 'birds'));

// refactor as arrow function
let initGame = function () {
  return {
    level: 1,
    score: 0
  }
};

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);

let initGameArrow = () => ({level: 1, score: 0});

/*
The reason is that the JavaScript engine does not interpret a statement starting
with a brace as an object literal, but as a block statement. So if you want to
force it to treat the statement as an object literal, you need to make sure that the
statement doesn't start with a brace. The easiest way to do this, without changing
the meaning or behavior of the statement, is by adding parentheses.
 */