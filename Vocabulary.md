## **Vocabulary**
### ***The Basics***
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

### ***Variables***

|term |definition |
| --- | --- |
|variable       |container to hold information; labels and stores data in memory |
|declaration |a statement that asks JS engine to reserve space with a particular name and **initializes** it with a value|
|constant |once initialized, it can't be changed in its scope; the syntax convention is all uppercase with underscores; e.g. const INTEREST_RATE = 0.02|
|scope  |determines where a variable is available in a program; the location where the variable is declared determines the scope; variables declared with let or const have **block** scope; the braces that surround a function definition are not normally considered to be blocks |
|readline       |a Node.js API that lets JS programs read input from the command line|

### ***Functions***
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

### ***Flow Control***
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
### ***Loops and Iterating***
|term |definition |
| --- | --- |
|while loop  |uses the while keyword followed by a conditional expression in parentheses and a block |
|increment/decrement operator|```++, --```; these increase/decrease operand by 1; not recommended  |
|do / while loop |similar to while loop, but always executes the code int he block at least once |
|for loop | same as while, but condensed syntax; good for iterating over arrays and other sequences |
|array iteration | arrays have methods that iterate over elements without loops; e.g. the ```forEach``` method|
|recursive function |a function that calls itself|
|baseline condition |every recursive function has a baseline condition that marks the end of recursion|
### ***Arrays***
|term |definition |
| --- | --- |
|array |ordered (and indexed) list of elements; heterogeneous (any data type) |
|mutate the caller |modifies the object upon which a method or funtion is called |
|length of an array |the highest index value plus 1 |
### ***Objects***
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
### ***More Stuff***

|term |definition |
| --- | --- |
|pointers |some variables act as pointers to a place in memory (unlike those that contain values); aka references |
|method chaining |calling a method on the return value of another method |
|regex |regular expression; a sequence of characters used to test whether a string matches a given pattern |
|exception handling |a process that deals with errors in a manageable and predictable manner |
|stack trace |an error message that reports the type, location, and cause of the error |
|ES6 |short for ECMAScript 6; the official name for JavaScript |