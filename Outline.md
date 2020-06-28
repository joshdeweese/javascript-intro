# Notes from [*Introduction to programming with JavaScript*](https://launchschool.com/books/javascript) by Launch School

&nbsp;

## ***The Basics***
---
#### [Link to exercises](https://github.com/joshdeweese/javascript_intro/tree/master/01_the_basics)
### **Vocabulary**
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


### **Notes**
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

## ***Variables***
---
#### [Link to exercises](https://github.com/joshdeweese/javascript_intro/tree/master/02_variables)
### **Vocabulary**
|term |definition |
| --- | --- |
|variable       |container to hold information; labels and stores data in memory |
|declaration |a statement that asks JS engine to reserve space with a particular name and **initializes** it with a value|
|constant |once initialized, it can't be changed in its scope; the syntax convention is all uppercase with underscores; e.g. const INTEREST_RATE = 0.02|
|scope  |determines where a variable is available in a program; the location where the variable is declared determines the scope; variables declared with let or const have **block** scope; the braces that surround a function definition are not normally considered to be blocks |


### **Notes**
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

## ***Input/Output***
---
#### [Link to exercises](https://github.com/joshdeweese/javascript_intro/tree/master/03_Input_Output)
### **Vocabulary**
|term |definition |
| --- | --- |
|variable       |container to hold information; labels and stores data in memory |

### **Notes**