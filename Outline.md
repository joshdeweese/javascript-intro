# Notes from [*Introduction to programming with JavaScript*](https://launchschool.com/books/javascript) by Launch School

## ***The Basics***
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

*The typeof operator:*
```
> typeof 1
= 'number'
```



## ***Variables***
### **Vocabulary**
### **Notes**