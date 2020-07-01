## Notes from [*Introduction to programming with JavaScript*](https://launchschool.com/books/javascript) by Launch School

&nbsp;

### ***The Basics***
##### [Link to exercises](https://github.com/joshdeweese/javascript_intro/tree/master/01_the_basics)
#### **Vocabulary**
|term |definition |
| --- | --- |
|primitive data type        |string, number, null, undefined, boolean |
|string                     |a list of characters in a specific sequence |
|syntactic                  |having to do with syntax (the language)|
|escape character           |tells the computer that the next character isn't syntactic. typically the \\ symbol.|
|template literal           |a javascript operation that allows string interpolation *example: \`5 plus 5 equals ${5 + 5}`*|
|numbers                    |javascript lumps all number types into one data type|
|booleans                   |represents an "on" or "off" switch. 2 values: true false|
|undefined                  |the absence of a value|
|null                       |the *intentional* absense of a value. must be used explicitly|
|operator                   |+ - * /, etc.|
|coerce                     |convert|
|implicit type coercion     |the engine decides how to coerce|
|explicit type coercion     |the programmer decides|
|NaN                        |Not a Number|
|complex data type          |data structure. i.e. array, object|
|array                      |a javascript data structure: ex: [1,2,3,4]|
|object                     |a javascript data structure: ex: {dog: 'barks'}. it is a collection of key-value pairs|
|expression                 |anything that JS can evaluate to a value (even if undefined)|
|evaluated value            |the value the REPL returns when you enter an expression. not requested|
|return value               |the value explicitly requested|
|statement                  |a syntactic unit. expressions can be part of a statement, but not all statements are expressions.|
|REPL |read evaluate print loop |


#### **Notes**
*More on what undefined means:*
```
> console.log("Hello, world!")
Hello, world!
= undefined

> let bar = 3
= undefined

> bar
= 3
```
The above example shows that the console.log function doesn't return a value, it just prints something to the console. That is why we see 'undefined' as the return value. the bar variable, on the other hand, returns a number.

>*The typeof operator:*
```
> typeof 1
= 'number'
```

>*The Number() function:*
```
> Number('1')
= 1
```

>*The parseInt() function:*
```
> parseInt('12abc')
= 12

> parseInt('12.32132')
= 12
```

>*The parseFloat() function:*
```
> parseFloat('12.25abc')
= 12.25
```

>*The String() function:*
```
> String(12)
= '12'
```

>*To access an array element:*
```
> [12,3,6,89][1]
= 3
```

>*To access an object value:*
```
> ({dog: 'barks', cat: 'meows'})['dog']
= 'barks'
```



&nbsp;

### ***Variables***
##### [Link to exercises](https://github.com/joshdeweese/javascript_intro/tree/master/02_variables)
#### **Vocabulary**
|term |definition |
| --- | --- |
|variable       |container to hold information; labels and stores data in memory |
|declaration |a statement that asks JS engine to reserve space with a particular name and **initializes** it with a value|
|constant |once initialized, it can't be changed in its scope; the syntax convention is all uppercase with underscores; e.g. const INTEREST_RATE = 0.02|
|scope  |determines where a variable is available in a program; the location where the variable is declared determines the scope; variables declared with let or const have **block** scope; the braces that surround a function definition are not normally considered to be blocks |


#### **Notes**
>*To declare a variable:*
```
> let foo
= undefined

>let foo = 42
= undefined
```

>*let:*
```
> let firstName = 'Sam'
= undefined

> firstName = 'Sara'
= 'Sara'
```

>*variables and memory:*
```
> let a = 4
= undefined

> let b = a
= undefined

> a = 7
= 7

> b
= 4
```
b retained the original value of a. Variables reference values in memory that aren't deeply-linked to eachother. If you change one variable, it doesn't change other variables with the same value.


&nbsp;
### ***Input/Output***
##### [Link to exercises](https://github.com/joshdeweese/javascript_intro/tree/master/03_Input_Output)
#### **Vocabulary**
|term |definition |
| --- | --- |
|readline       |a Node.js API that lets JS programs read input from the command line|

#### **Notes**
>the require function:
```
let rlSync = require('readline-sync');
let name = rlSync.question("What is your name?\n")

/ In broswer:
let name = prompt("What's your name?");
console.log(`Good morning, ${name}.`)
```
The built in require function imports a package into the program. It returns the library of an object, which can then be 
assigned to a variable. NOTE: question returns a string, so if we need them to be returned as numbers, 
use the Number() function.

&nbsp;
### ***Functions***
##### [Link to exercises](https://github.com/joshdeweese/javascript_intro/tree/master/04_Functions)
#### **Vocabulary**
|term |definition |
| --- | --- |
|function       |a procedure that allows the user to extract code and run it as a separate unit|
|reserved keyword |a word in a programming language that has a special use|
|argument |optional values provided to a function|
|pass |to supply a function with an argument|
|initialize |to assign an initial value to a data object or variable|
|invoke |same as "call": to create a function|
|parameter |placeholder; the local variable name between the () in a function|
|argument |value; the value you pass into the function for the parameter |
|return value |a function output |
|default parameter |optional parameter for when user doesn't provide one; ex: function fname(words = 'hello') {|
|variable scope |where a variable is accessible in a program; denoted with camelCase style |
|global variable |available throughout a program; usually denoted in this style: INTEREST_RATE |
|local variable |confined to a function; short-lived: they go away when the function stops running |
|method invocation |'xyxyx'.toUpperCase()|
|mutate the caller |a method that permanently alters the object that invokes it; e.g. .pop() |
|non-destructive array function|mutates the copy; the original stays the same, but creates a copy of it and modifies |
|function composition |use a function call as an argument in another function |
|three ways to define a function|function declaration, function expression, arrow function|
|implicit return |an arrow function does not require the return statment if there is only one expression|


#### **Notes**
*When JavaScript encounters the return statment, it evaluates the expression, stops running, and returns the expression's
value*

*Global variables can be useful in some application-wide configuration contexts,
but generally lead to bugs. Smaller variable scopes limit the risk of an 
outer scope mis-using the variable.*

*All primative values are immutable.*

```javascript
//function declaration:
function functionName(arguments) {
  function body;
}

//function expression:
let functionName = function(arguments) {
  function body;
}

//arrow function:
let functionName = (arguments) => function body;
```

*A function expression has one key difference from a declaration: you can't invoke a function expression before it appears in your program.*

&nbsp;
### ***Flow Control***
##### [Link to exercises](https://github.com/joshdeweese/javascript_intro/tree/master/05_Flow_Control)
#### **Vocabulary**
|term |definition |
| --- | --- |
|conditional       |a statement that checks a condition before executing |
|comparison operator|<, >, <=, >=, ==, === |
|strict equality operator |===  aka identity operator; returns true when the operands have the same type and value|
|non-strict equality operator |==   aka loose equality operator; coerces values of different types to be the same type to compare|
|strict inequality operator |!==  opposite of strict equality |
|non-strict inequality operator |!=  opposite of non-strict equality |
|logical operators |&& and two pipes; && means 'and operator' and the two pipes are the 'or operator'; the 'not operator' is ! and negates an expression|
|short circuits |if there are multiple logical operator expressions, and one is false, the program doesn't check the other condition |
|truthiness|JavaScript can coerce any value into a boolean value; it treats some values as false, everything else is true (see examples below) |
|precedence |javascript evaluates operators in a specific order; parentheses override precedence |
|ternary operator |quick way to write a concise i/else conditional|
|switch statement |case statement; may be cleaner for long or complex conditional statements |


#### **Notes**

> *Example if statement:*
```javascript
if (x === 3) {
    console.log("x is 3");
} else if (x === 4) {
    console.log("x is 4");
} else {
    console.log("x is not 3 or 4");
}
```
> *Values that coerce to false:*
- false
- 0
- an empty string
- undefined
- null
- NaN

> *Operator precedence*
- Comparison ```<=, <,>, >=```
- Equality ```==, !=```
- Logical AND ```&&```
- Logical OR ||

> *Ternary operator*
```javascript
> 1 == 1 ? 'this is true': 'this is not true'
= 'this is true'
```

> *Switch statement*
```javascript
switch (a) {
    case 5:
        console.log('a is 5');
        break;
    case 6:
        console.log('a is 6');
        break;
    default:
        console.log('a is neither 5, nor 6');
        break;
}
```

> *Short circuits*
```javascript
// Here, the expression stops at false
false || (true && false) // false

// Stops because a number is truthy
(1 + 2) || true // 3

// Because it is 'or,' it continues to evaluate
// after 'true'
true && (1 + 2) // 3

```
&nbsp;
### ***Loops and Iterating***
##### [Link to exercises](https://github.com/joshdeweese/javascript_intro/tree/master/06_Loops_Iterating)
#### **Vocabulary**
|term |definition |
| --- | --- |
|while loop  |uses the while keyword followed by a conditional expression in parentheses and a block |
|increment/decrement operator|++, --; these increase/decrease operand by 1; not recommended  |
|do / while loop |similar to while loop, but always executes the code int he block at least once |
|for loop | same as while, but condensed syntax; good for iterating over arrays and other sequences |



#### **Notes**

> *While loop*
```javascript
let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter += 1;
}
```

> *Iterate over an array with a while loop: capitalized the list of names in a new list*

```javascript
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}
```

> *Do/While loop*
```javascript
let answer;
do {
  answer = prompt("Do you want to do that again?");
} while (answer === 'y');
```

> *For loop*
```javascript
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

// Same loop but with conditional:
for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Naveed') {
    continue;  
}
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}
```

