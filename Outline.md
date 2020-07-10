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
|increment/decrement operator|```++, --```; these increase/decrease operand by 1; not recommended  |
|do / while loop |similar to while loop, but always executes the code int he block at least once |
|for loop | same as while, but condensed syntax; good for iterating over arrays and other sequences |
|array iteration | arrays have methods that iterate over elements without loops; e.g. the ```forEach``` method|
|recursive function |a function that calls itself|
|baseline condition |every recursive function has a baseline condition that marks the end of recursion|

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
> *forEach*
```javascript
names.forEach(function (name) {
  console.log(name);
})

// Or, use an arrow function
names.forEach(name => console.log(name));
```
> *Recursive function*
```javascript
function doubler(number) {
  console.log(number);
  
  if (number <= 50) {
    doubler(number * 2);  
}
}

// fibonacci function
function fibonacci(number) {
  if (number < 2) {
    return number;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

```

> *Factorial with recursive example*
```javascript
// Compute the factorial

function factorial(number) {
  let result = 1;
  for (let i = number; i > 0; i -= 1) {
    result = result * i;
  }
  return result;
}

console.log(factorial(4));

// with recursion

function factorial_recursion(number) {
  if (number <= 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

console.log(factorial_recursion(4));
```

&nbsp;
### ***Arrays***
##### [Link to exercises](https://github.com/joshdeweese/javascript_intro/tree/master/07_Arrays)
#### **Vocabulary**
|term |definition |
| --- | --- |
|array |ordered (and indexed) list of elements; heterogeneous (any data type) |
|mutate the caller |modifies the object upon which a method or funtion is called |
|length of an array |the highest index value plus 1 |

#### **Notes**

> *Referencing array elements*
```javascript
let myArray = [1, 'string', 1.4456];

> myArray[0];
= 1

> myArray[myArray.length - 1];
= 1.4456
```

> *Modifying arrays*
```javascript
// Replace an element
let array = [1, 2, 3];
> array[1] = 4;
= 4

array
= [ 1, 4, 3 ]

// Add a new element
array[array.length] = 10;
= 10

array
= [ 1, 4, 3, 10 ]

// concat

> array.concat(42, 'abc')
= [ 1, 4, 3, 10, 42, 'abc' ]

> array
= [ 1, 4, 3, 10 ]
```
> *Adding and removing elements with push and pop. These methods mutate the caller*
```javascript
> array
= [ 1, 4, 3, 10, 'a' ]

> array.push(null, 'xyz')
= 7 //The new length of the array

> array
= [ 1, 4, 3, 10, 'a', null, 'xyz' ]

> array.pop()
= 'xyz'            // removed element value

> array
= [ 1, 4, 3, 10, 'a', null ]
```
> *splice*
```
// splice mutates the array and returns a new array
> array.splice(3, 2)
[ 10, 'a' ]

> array
= [ 1, 4, 3, null ]
```
> *forEach()*
```javascript
// forEach() requres a callback function that performs actions on the argument
let array = [1, 2, 3];
array.forEach(function (num) {
  console.log(num);
});

// with arrow function
let array = [1, 2, 3];
array.forEach(num => console.log(num));
```
> *map: the map function works well when you want to create a new array based on the original*
```javascript
> let numbers = [1, 2, 3, 4]
> let squares = numbers.map(num => num * num);
> squares
= [ 1, 4, 9, 16 ]
```

> *filter*
```javascript
> let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]
> numbers.filter(num => num > 4)
= [ 5, 6, 7, 8, 9, 10 ]
// Does not mutate the caller.
```

> *reduce*
```javascript
// reduce takes two arguments: a callback function and a value
// the callback function takes two arguments as well: 
//      an element from the array, and the current value of the accumulator
> let arr = [2,3,5,7]
> arr.reduce((accumulator, element) => accumulator + element, 0)
= 17

> arr.reduce((accumulator, element) => accumulator * element, 1)
= 210
// In this example, we begin with 1 because it is multiplication. 0 would result in 0

> let strings = ['a','b','c','d']
> strings.reduce((accumulator, element) => {
      return accumulator + element.toUpperCase()
     }, '')
= 'ABCD'
```

> *arrays*
```javascript
> arr = [1, 2, 3]
= [ 1, 2, 3 ]

> arr[-3] = 4
= 4

> arr
= [ 1, 2, 3, '-3': 4 ]

> arr[3.1415] = 'pi'
= [ 1, 2, 3, '-3': 4, '3.1415': 'pi' ]

> arr["cat"] = 'Fluffy'
= 'Fluffy'

> arr
= [ 1, 2, 3, '-3': 4, '3.1415': 'pi', cat: 'Fluffy' ]
```

> *nested arrays*
```javascript
> let teams = [['Joe', 'Jennifer'], ['Frank', 'Molly'], ['Dan', 'Sarah']]

> teams[2]
= ['Dan', 'Sarah']

> teams[2][1]
= 'Sarah'
```

> *array equality*
````javascript
> [1,2,3] === [1,2,3]
> false

> let a = [1,2,3]
> let b = a
> a === b
= true

// JavaScript treats two arrays as equal when they are the same array, as they occupy the same spot in memory.
// Assigning a to b makes b reference a, it doesn't create a second array.
````

> *includes*
```javascript
> let a = [1,2,3,4,5]
> a.includes(2)
= true

> a.includes(10)
= false

> let a = [1, 2, [3, 4], 5]
> a.includes([3, 4])
= false
// includes uses === to compare, so we can't use includes to check for a nested array or object
```

> *sort*
```javascript
> let a = [5, 3, 8, 2, 4, 1]
> a.sort()
= [ 1, 2, 3, 4, 5, 8 ]

// sort mutates the caller
```

> *slice*
```javascript
> let fruits = ['mango', 'orange', 'banana', 'pear', 'apple']
> fruits.slice(1, 3)
= [ 'orange', 'banana' ]

> fruits.slice(2) // second argument defaults to rest of array
= [ 'banana', 'pear', 'apple' ]

> fruits.slice() // no arguments duplicates the array
= [ 'mango', 'orange', 'banana', 'pear', 'apple' ]
```

> *reverse*
```javascript
> let numbers = [1, 2, 3, 4]
> numbers.reverse()
= [ 4, 3, 2, 1 ]

> numbers
= [ 4, 3, 2, 1 ]

// reverse is destructive: it mutates the caller. you can add slice() to avoid this
```

&nbsp;
### ***Objects***
##### [Link to exercises](https://github.com/joshdeweese/javascript_intro/tree/master/08_Objects)
#### **Vocabulary**
|term |definition |
| --- | --- |
|object |collection of key-value pairs |
|object literal syntax |let object = {name: 'item'} |
|properties |key-value pairs in an object |
|types of objects |simple objects, arrays, date objects, functions|
|atomic |indivisible: primitive values|
|inheritance |basing an object or class on another object or class|
|prototype |when object a inherits from object b, b is the prototype of a |
|iteration |a process in which a set of instructions are repeated a specified number of times or until a condition is met|

#### **Notes**

> *Object literal syntax*
```javascript
let person = {
  name: 'Jane',
  age: 37,
  hobbies: ['photography', 'genealogy']
}
```

> *Accessing values in an object*
```javascript
// dot notation
> person.name
= 'Jane'

//bracket notation
> person['name']
= 'Jane'
```

> *Adding values to an object*
```javascript
> person.height = '5 ft'
= '5 ft'

> person['gender'] = 'female'
= 'female'

> person
= { name: 'Jane', age: 37, hobbies: ['photography', 'genealogy'], height: '5 ft', gender: 'female' }
```

> *deleting a key-value pair*
```javascript
> delete person.age
= true
```

> *inheritance: Object.create*
> *in this example the **parent** object is bob, and the **child** object is studentBob*
```javascript
let bob = { name: 'Bob', age: 22 };
let studentBob = Object.create(bob);
studentBob.year = 'Senior';

console.log(studentBob.name); // logs 'Bob'

// here the parent object is bob, and the child object is studentBob
```

> *Iterating with the for/in loop*
> The for/in loop also loops over the properties of an objects prototype
```javascript
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

for (let prop in person) {
  console.log(person[prop]);
}

// Bob
// 30
// 6 ft
```

> *hasOwnProperty method*
```javascript
let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(obj2[prop]);
  }
}

// 3
// 4
```

> *Object.keys*
```javascript
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

let personKeys = Object.keys(person); // returns ['name', 'age', 'height']

personKeys.forEach(key => console.log(person[key]));
// Bob
// 30
// 6 ft

//Note: the order in an object is not specified like in an array
```

> *Common operations*
```javascript
// Object.values
let person = { name: 'Bob', age: 30, height: '6ft' };
let personValues = Object.values(person);
console.log(personValues); // logs [ 'Bob', 30, '6ft' ]

// Object.entries
let person = { name: 'Bob', age: 30, height: '6ft' };
console.log(Object.entries(person));
// logs [[ 'name', 'Bob' ], [ 'age', 30 ], [ 'height', '6ft' ]]

// Object.assign
> let objA = { a: 'foo' }
= undefined

> let objB = { b: 'bar' }
= undefined

> Object.assign(objA, objB)
= { a: 'foo', b: 'bar' }
// In this case, objA is now the combined version

> Object.assign({}, objA, objB)
= { a: 'foo', b: 'bar' }
// This version does not alter objA, and creates a new object

```

&nbsp;
### ***More Stuff***
##### [Link to exercises](https://github.com/joshdeweese/javascript_intro/tree/master/09_More_Stuff)
#### **Vocabulary**
|term |definition |
| --- | --- |
|pointers |some variables act as pointers to a place in memory (unlike those that contain values); aka references |
|method chaining |calling a method on the return value of another method |
|regex |regular expression; a sequence of characters used to test whether a string matches a given pattern |
|exception handling |a process that deals with errors in a manageable and predictable manner |
|stack trace |an error message that reports the type, location, and cause of the error |
|ES6 |short for ECMAScript 6; the official name for JavaScript |

#### **Notes**

> *Variables as Pointers* :
> Variables that have primitive values store those values in the variable.
> When you assign a new value to a variable, JS changes the variables content to the new value
```javascript
> let a = 5
> let b = a
> a = 8
> a
= 8

> b
= 5

// With an array
> let c = [1, 2]
> let d = c
> c = [3, 4]
> c
= [ 3, 4 ]

> d
= [ 1, 2 ]

// An array and a mutating operation
> let e = [1, 2]
> let f = e
> e.push(3, 4)
> e
= [ 1, 2, 3, 4 ]

> f
= [ 1, 2, 3, 4 ]
// Primitive values get stored directly in the variable, but objects and arrays are different. in this example, e and f are "aliases" for the same value (pointers)

```
> *Method Chaining*
```javascript
let str = 'Pete Hanson';
let names = str.toUpperCase().split(' ').reverse().join(', ');
console.log(names);
// outputs: HANSON, PETE
```
> *Regex*
```javascript
// test
> /o/.test('bobcat')
= true

> /l/.test('bobcat')
= false

if (/b/.test('bobcat')) {
  // this branch executes since 'b' is in 'bobcat'
  console.log("Yes, it contains the letter 'b'");
} else {
  // this branch does not execute since 'bobcat' contains 'b'
  console.log("No, it doesn't contain the letter 'b'");
}

// match
> "bobcat".match(/x/)
= null

// Global match
> "bobcat".match(/[bct]/g)
= [ 'b', 'b', 'c', 't' ]
// the /g flag - a global match - returns an array with each matching substring

```
> *The Math Object*
```javascript
> Math.sqrt(36)
= 6

> Math.PI
= 3.141592653589763
```
> *Dates*
```javascript
//getDay() returns the day of the week
> let date = new Date('December 25, 2012')
> date.getDay()
= 2

function getDayOfWeek(date) {
  let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return daysOfWeek[date.getDay()];
}

let date = new Date('December 25, 2012');
console.log(getDayOfWeek(date)); // logs Tuesday
```
> *Exceptions*
```javascript
// The try/catch statement
try {
  // perform an operation that may produce an error
} catch (exception) {
  // an error has occurred. do something about it here.
  // for example, log the error
} finally {
  // Optional 'finally' block; not used often
  // Executes even if an exception occurs.
}

let names = ['bob', 'joe', 'steve', undefined, 'frank'];

names.forEach(name => {
  try {
    console.log(`${name}'s name has ${name.length} letters in it.`);
  } catch (exception) {
    console.log('Something went wrong');
  }
});

// Custom exception
function foo(number) {
  if (typeof number !== "number") {
    throw new TypeError("expected a number");
  }

  // handle case where the argument really is a number
}
```


