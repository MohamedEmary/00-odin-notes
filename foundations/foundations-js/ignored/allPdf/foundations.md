---
title: \huge JavaScript Section The Odin Project Foundations
# subtitle: 

# Command: `-L scholarly-metadata.lua -L format-authors.lua`
institute:
  # OR Faculty of Computers and Artificial Intelligence, Benha University (See whether to remove Comma in [Intelligence, Benha] or not)
  - first: Faculty of Computer Science, Benha University

  # - second: Second, Newer Company
author:
  - Mohamed Emary:
      institute:
        - first
      correspondence: yes
      email: mohamed21074@fci.bu.edu.eg

# author: [Mohamed Emary]

# author:
# - Mohamed Ahmed Emary^[**Benha Faculty of Computers and Artificial Intelligence, <mohamed21074@fci.bu.edu.eg>**]
abstract: 
date: \today

papersize: a4
toc: true
# toc-depth: 
# lof: true

geometry:
- top=20mm
- bottom=20mm
- right=20mm
- left=20mm

fontfamily:
# documentclass: extarticle
fontsize: 11pt
numbersections: yes
fig_caption: true
autoEqnLabels: true
theme: copenhagen
# linkcolor table of figures links and document inner links and urlcolor for regular links
linkcolor: black
urlcolor: blue

include-before:
# Pagebreak after main title
- '`\newpage{}`{=latex}'

header-includes:
# Fancy Header
 - \usepackage{lastpage}
 - \usepackage{fancyhdr}
 - \pagestyle{fancy}
 - \fancypagestyle{plain}{}
 - \fancyhf{}
 - \renewcommand{\headrulewidth}{0pt}
 - \rfoot{Page \thepage \hspace{1pt} of \pageref{LastPage}}

# Code blocks linebreaks
 - \usepackage{fvextra}
 - \DefineVerbatimEnvironment{Highlighting}{Verbatim}{breaklines,commandchars=\\\{\}}

# Graphs & function plots
 - \usepackage{pgfplots}
 - \usepackage{tikz}

# tcolorbox package
 - \usepackage[most]{tcolorbox}

# Figures with captions
 - \usepackage{float}
 - \makeatletter
 - \def\fps@figure{H} 
 - \makeatother

# lettrine package to make first letter larger
 - \usepackage{lettrine}
 - \renewcommand{\LettrineTextFont}{\normalfont}
#  - \usepackage{Typocaps}   # The package need to be changed to use another font
#  - \renewcommand{\LettrineFontHook}{\Typocapsfamily} # \Typocapsfamily is the font if you want to change

# Definition Box
 - \usepackage{xcolor}
 - \usepackage{tikz}
 - \usepackage{lipsum}
 - \definecolor{gre}{RGB}{101, 191, 127}
 - \definecolor{gree}{RGB}{7, 135, 44}
 - \usepackage[most]{tcolorbox}
# 
 - \newtcolorbox{defin}{colback=green!10,enhanced,title=Definition,attach boxed title to top left={xshift=-4mm},boxrule=0pt,after skip=1cm,before skip=1cm,right skip=0cm,breakable,fonttitle=\bfseries,toprule=0pt,bottomrule=0pt,rightrule=0pt,leftrule=4pt,arc=0mm,skin=enhancedlast jigsaw,sharp corners,colframe=gree,colbacktitle=gre,boxed title style={frame code={\fill[gre](frame.south west)--(frame.north west)--(frame.north east)--([xshift=3mm]frame.east)--(frame.south east)--cycle;\draw[line width=1mm,gre]([xshift=2mm]frame.north east)--([xshift=5mm]frame.east)--([xshift=2mm]frame.south east);\draw[line width=1mm,gre]([xshift=5mm]frame.north east)--([xshift=8mm]frame.east)--([xshift=5mm]frame.south east);\fill[green!40](frame.south west)--+(4mm,-2mm)--+(4mm,2mm)--cycle;}}}

 - \usepackage{caption}
 - \usepackage{tabularray}
 - \UseTblrLibrary{booktabs}
 - \setlength{\heavyrulewidth}{1.5pt}

# Used for tables with merged cells
 - \usepackage{multirow}
---

\linebreak

# Main Notes

**Return to all the hard code snippets (DOM Manipulation) in all articles mentioned in JS Sections**

**notes on Javascript.info website articles is on kindle**

***First of all read the highlighted notes from the [JavaScript.info](https://JavaScript.info) book on kindle.***

## Difference between `let`, `var`, and `const`

| Keyword | Scope | Can be reassigned | Can be redeclared | Hoisted | Temporal Dead Zone | Advantages | Disadvantages |
| -- | -- | --- | --- | -- | --- | ---- | ------ |
| `var`   | Function | Yes | Yes | Yes | No | Can be useful for hoisting | Can lead to unexpected behavior due to hoisting and function scope |
| | | | | | | | |
| `let`   | Block | Yes | No | No | Yes | Block scoping can prevent variable leakage | Cannot be hoisted, which can lead to reference errors |
| | | | | | | | |
| `const` | Block | No | No | No | Yes | Prevents accidental reassignment | Cannot be reassigned, which can be inconvenient in some cases |

## Some JavaScript Notes

- `"use strict";` prevents the use of undeclared variables. like `x = 3.14;` which will throw an error. because it wasn't declared first. So it has to be `let x = 3.14;`

- Constant that are known perior to execution are named in UPPERCASE. like `const PI = 3.14;` while constants that are calculated at run time are named in lowercase. like `const area = PI * radius * radius;`

- Declaration with an assignment (such as let b = 7 * a) returns undefined and so you cannot declare and assign a value to a variable and read its value in the same line.

- Notice the difference between pre-increment and post-increment:

```javascript
      let x = 5;
      console.log(x++); //5 because x++ is post increment
      console.log(x); //6 now x is already incremented
      console.log(++x); //7 because ++x is pre increment
```

- In JavaScript, you can do this `m = Math;` then use `m.sqrt(2)`. What you see is that we assigned the `Math` object to the variable `m`. So we can use it as a shortcut so we just type `m` instead of `Math`.

- Some info related to numbers representation:
  - JavaScript has only one type of number. Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc. JavaScript Numbers are *Always 64-bit* Floating Point (Double Precision). It uses the international IEEE 754 standard 1 bit for the sign, 11 bits for the exponent, and 52 bits for the mantissa.

  - Floating point arithmetic is not always 100% accurate. Test this `let x = 0.2 + 0.1;` If you print `x` it will give you `0.30000000000000004`. This is because of IEEE 754 standard for storing and doing calculations on floating point numbers. We can also solve the problem if we multiply and divide: `let x = (0.2 * 10 + 0.1 * 10) / 10;`

- If you add a number and a string, the result will be a string concatenation:

## Some notes on numbers

**A common mistake is to expect this result to be 30:**

```javascript
  let x = 10;
  let y = 20;
  let z = "The result is: " + x + y;
```

**A common mistake is to expect this result to be 102030:**

```javascript
let x = 10;
let y = 20;
let z = "30";
let result = x + y + z;
```

**JavaScript will try to convert strings to numbers in all numeric operations:**

```javascript
let x = "100";
let y = "10";
let z = x / y;
```

**This is a NaN: `let x = 100 / "Apple";`**

**Result here will be a concatenation like "NaN5":**

```javascript
let x = NaN;
let y = "5";
let z = x + y;
```

**NaN is a number: `typeof NaN` returns `number`.**

**Never write a number with a leading zero (like 07). Some JavaScript versions interpret numbers as octal if they are written with a leading zero.**

**The `toString()` method can output numbers from base 2 to 36:**

**Decimal 32 different representations:**

Code will be like: `MyNumber.toString(base);`

| Base | Base Name | Result | Conversion |
| --- | --- | --- | ---------- |
| 36   | Hexatrigesimal   | w     | $w = 32$   |
||||
| 32   | Duotrigesimal   |  10    | $1 \times 32 + 0 \times 1 = 32$ |
||||
| 16   | Hexadecimal   | 20     | $2 \times 16 + 0 \times 1 = 32$ |
||||
| 12   | Duodecimal   | 28     | $2 \times 12 + 8 \times 1 = 32$ |
||||
| 10   | Decimal   | 32     | $3 \times 10 + 2 \times 1 = 32$ |
||||
| 8    | Octal    | 40     | $4 \times 8 + 0 \times 1 = 32$ |
||||
| 2    | Binary    | 100000     | $1 \times 32 + 0 \times 16 + 0 \times 8 + 0 \times 4 + 0 \times 2 + 0 \times 1 = 32$ |

**Numbers can be defined as objects with the keyword new: `let y = new Number(123);`. However, avoid `new` keyword. It complicates the code, slows down execution, and produce unexpected results.**

**Here the result is 743, not 77, because myNumber is actually defined as a string.**

```javascript
let myNumber = "74";
myNumber += 3;
typeof myNumber; // string not number
```

The `+` operator

```javascript
// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0```
```

## Operators in JS

Comparison between `==` and `===` operators in JS

| Operator | Name | Description | Example |
| -- | --- | -------- | -------- |
| `==` | Equality | Test whether the values are the same but not whether the values' datatypes are the same | `5 == "5"` returns `true` because JavaScript converts the string `"5"` to the number `5` before making the comparison. |
|||
| `===` | Strict Equality | Test the equality of both the values and their datatypes | `5 === "5"` returns `false` because the operands are of different types. |

***The strict versions tend to result in fewer errors, so we recommend you use them.***

**Comparing two JavaScript objects always returns false.**

```javascript
x = new Number(500);
y = new Number(500);
console.log(x == y); // flase
console.log(x === y); // flase
```

**The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.**

```javascript
let a = (1 + 2, 3 + 4);
alert( a ); // 7 (the result of 3 + 4)
```

Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.

Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.

[See this exercise](https://javascript.info/task/primitive-conversions-questions)

***Review MDN Articles Hard JS Code***

\linebreak

# [Handling text — strings in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#the_power_of_words)

**Template literal** is a string in which we use backtick characters **(`)**, instead of using single or double quote marks **(' or ")**

ex:

```{.js .numberLines}
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"
```

---

Every number has a method called `toString()` that converts it to the equivalent string.

The `Number()` function converts anything passed to it into a number.

---

Template literals respect the line breaks (You can also just use `\n` if you want) in the source code, so you can write strings that span multiple lines like this:

```{.js .numberLines}
const output = `I like the song.
I gave it a score of 90%.`;
console.log(output);

/*
The output will be:
I like the song.
I gave it a score of 90%.
*/
```

---

# [JavaScript String Methods](https://www.w3schools.com/js/js_string_methods.asp)

JS is just like python in case of indexing the last index is not included.

All string methods return a new string. They don't modify the original string.

Strings are immutable: Strings cannot be changed, only replaced.

---

Comparison `substr()`, `substring()`, and `slice()`:

| Method | Parameters | Negative Index |
| ---- | ------------ | ------------ |
| `substr()` | `start`, `length` **not end** | Allowed |
|||
| `substring()` | `start`, `end` | Treated as zero |
|||
| `slice()` | `start`, `end` | Allowed |

In the 3 functions if you omit the `end` parameter it will slice out the rest of the string.

---

`replace()` function notes:

- The `replace()` method replaces only the first match
- If you want to replace all matches, **use a regular expression** with the `/g` flag set, or use the `replaceAll()` method.
- `replace()` method is case sensitive, and to replace case insensitive, use a regular expression with an `/i` flag (***i***nsensitive):

> Important note related to regular expressions: **regular expressions are written without quotes.**

The regex begins and ends with `/` and the `g` flag means global, i.e. replace all occurrences, `i` flag means case insensitive.

Example: `console.log(my_str.replace(/this/gi, "that"));`

If you use regex with `replaceAll()` method you have to use the `g` flag, otherwise a TypeError is thrown

---

Padding methods `padStart()` and `padEnd()` take **length** and character as parameters: `string.padStart(length, character)`

Strings can be indexed using `[ ]` or `charAt()` If no character is found, [ ] returns undefined, while `charAt()` returns an empty string

**strings in JS are immutable**, so you can't change a character in a string by doing something like `my_str[0] = "A";` you will not get an error, but the string will not change.

```{.js .numberLines}
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
text.split("")    // Split on individual characters
```

---

**Table of Some Common JavaScript String Method:**

| Method | Parameters | Return Value |
| ---- | -------- | -------------- |
| `length` | N/A | The length of the string |
|||
| `replace()` | `searchValue`, `replaceValue` | A new string with all occurrences of `searchValue` replaced with `replaceValue` |
|||
| `replaceAll()` | `searchValue`, `replaceValue` | A new string with all occurrences of `searchValue` replaced with `replaceValue` (new in ECMAScript 2021) |
|||
| `toUpperCase()` | N/A | A new string with all characters converted to uppercase |
|||
| `toLowerCase()` | N/A | A new string with all characters converted to lowercase |
|||
| `concat()` | `string2`, `string3`, ... | A new string that concatenates the original string with one or more additional strings |
|||
| `trim()` | N/A | A new string with all whitespace removed from the beginning and end of the original string |
|||
| `trimStart()` | N/A | A new string with all whitespace removed from the beginning of the original string (new in ECMAScript 2021) |
|||
| `trimEnd()` | N/A | A new string with all whitespace removed from the end of the original string (new in ECMAScript 2021) |
|||
| `padStart()` | `targetLength`, `padString` | A new string with the original string padded with `padString` at the beginning to reach the specified `targetLength` |
|||
| `padEnd()` | `targetLength`, `padString` | A new string with the original string padded with `padString` at the end to reach the specified `targetLength` |
|||
| `charAt()` | `index` | The character at the specified `index` |
|||
| `charCodeAt()` | `index` | The Unicode value of the character at the specified `index` |
|||
| `split()` | `separator`, `limit` | An array of substrings created by splitting the original string at each occurrence of `separator` (or at most `limit` occurrences) |

# [JavaScript String Reference](https://www.w3schools.com/jsref/jsref_obj_string.asp)

**JavaScript, methods and properties are also available to strings, because JavaScript treats strings as objects**

look at String HTML Wrapper Methods in the page

| Name | Description |
| ------- | -------------------- |
| `indexOf()` | Returns the index (position) of the first occurrence of a value in a string |
||
|`repeat()` | Returns a new string with a number of copies of a string |

# [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

**String primitives** and **string objects** share many behaviors, but have other important differences

The `eval(string_primitive)` function:

```{.js .numberLines}
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
```

A String object can always be converted to its primitive counterpart with the `valueOf()` method.

```{.js .numberLines}
console.log(eval(s2.valueOf())); // returns the number 4
```

**[String coercion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)**

Many built-in operations that expect strings first coerce their arguments to strings (which is largely why String objects behave similarly to string primitives). The operation can be summarized as follows:

- Strings are returned as-is.
- `undefined` turns into `"undefined"`.
- `null` turns into `"null"`.
- `true` turns into `"true"`; `false` turns into `"false"`.
- Numbers are converted with the same algorithm as `toString(10)`.
- BigInts are converted with the same algorithm as `toString(10)`.
- Symbols throw a TypeError.
- Objects are first converted to a primitive by calling its `[@@toPrimitive]()` (with `"string"` as hint), `toString()`, and `valueOf()` methods, in that order. The resulting primitive is then converted to a string.

**There are several ways to achieve nearly the same effect in JavaScript.**

- Template literal: ``${x}``` does exactly the string coercion steps explained above for the embedded expression.
- The `String()` function: `String(x)` uses the same algorithm to convert `x`, except that Symbols don't throw a `TypeError`, but return `"Symbol(description)"`, where `description` is the description of the Symbol.
- Using the `+` operator: `"" + x` coerces its operand to a primitive instead of a string, and, for some objects, has entirely different behaviors from normal string coercion. See its reference page for more details.

# [Comparisons](https://javascript.info/comparison)

| Value | Type | Numeric Conversion | Equality Check | Strict Equality Check | Comparison |
| -- | -- | --- | ------ | ----- | --- |
| `null` | `null` | `0` | `null`, `undefined` only return `true`, other values are `false` | only return `true`, other values are `false` | `<, <=, >, >= 0` |
| | | |
| `undefined` | `undefined` | `NaN` | | `undefined` only return `true`, other values are `false` | Always `false` |

There is some more information you can find ***in kindle highlights***

# [Conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

A common pattern you'll come across again and again. Any value that is not `false`, `undefined`, `null`, `0`, `NaN`, or an empty string (`''`) actually returns `true` when tested as a conditional statement, therefore you can use a variable name on its own to test whether it is `true`, or even that it exists (that is, it is not undefined.)

So for example:

```{.js .numberLines}
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```

As you see from the above code, `cheese` is used as a conditional statement and it returns `true` because it is neither `false`, `undefined`, `null`, `0`, `NaN`, or an empty string (`''`).

See the two examples at the end of the article.

\linebreak

# Nullish Coalescing Operator

The nullish coalescing operator `??` provides a short syntax for selecting a first “defined” variable from the list.

The difference between `||` and `??` is that the `??` checks only for `null` and `undefined`, while the `||` operator also checks for `0`, `false` and `''` (Falsy Values).

*Example:*

```{.js .numberLines}
let firstName = null;
let middleName = "";
let lastName = undefined;
let nickName = "Supercoder";
console.log(firstName ?? middleName ?? lastName ?? nickName ?? "Anonymous"); // "" empty string
console.log(firstName || middleName || lastName || nickName || "Anonymous"); // Supercoder
```

---

# Topics from Odin lesson page

***Important Note: I have studied this lesson topics (Fundamentals Part 3) from youtube videos not the links provided by The Odin Project***

- How to define and invoke (a fancy word for run, or execute) different kinds of functions.
- How to use the return value.
- What function scope is.

In JavaScript, when defining a function, you don't have to write `let` before function parameters because function parameters are treated as variables within the function's scope. Therefore, they don't need to be declared with `let`, `const`, or `var`.

Functions apply a principle called the **DRY** principle, which stands for **Don't Repeat Yourself**. That is if you find yourself writing the same code over and over again, you should consider putting that code into a function.

## Function Rest Parameter `...`

To accept any number of parameters in a function in JavaScript you can use the rest parameter `...` before the parameter name but you should take care of the following:

1. The rest parameter must be the last parameter in the function definition.
2. Only one rest parameter is allowed in a function.

*Example:*

```{.js .numberLines}
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5)); // 15

function sum(a, ...numbers, b) {
  // Invalid function definition
}

function sum(...numbers1, ...numbers2) {
  // Invalid function definition
}
```

### Other Use Cases of Rest Parameter `...`

- When working with array destructuring - The rest operator can be used to destructure an array and capture the remaining elements in an array.

```{.js}
     const [first, ...rest] = [1, 2, 3, 4];
     first // 1
     rest // [2, 3, 4]
```

- When spreading an array into function arguments - The rest operator spreads an array out into individual arguments when calling a function.

```{.js}
     const numbers = [1, 2, 3];
     Math.max(...numbers); // 3
```

- When copying arrays - The rest operator copies all elements from one array into a new array.

```{.js}
     const arr1 = [1, 2, 3]; 
     const arr2 = [...arr1]; // arr2 = [1, 2, 3]
```

## Anonymous Function

Named functions have a function name that can be called directly. Anonymous functions do not have a name bound to them they are stored in a variable and can be called using that variable.

In JavaScript Named function are ***hoisted*** to the top of their scope and can be called before they are defined. Anonymous functions can only be called after they are defined so they are not ***hoisted***.

***Hoisting*** also happens with `var` variables which was the reason of introducing `let` and `const` variables.

Named functions show up in stack traces which can help with debugging. Anonymous functions show up as anonymous in stack traces making debugging harder.

Named functions can call themselves recursively. Anonymous functions cannot as they have no internal name to call.

Named functions can be immediately ***invoked*** by adding `()` after their declaration. Anonymous functions must be stored in a variable before being invoked.

| Use named functions when: | Use anonymous functions when: |
| --- | --- |
| You need to recursively call the function or refer to it later in your code. Named functions make recursion and referencing easier.| The function is a throwaway helper that doesn't need recursion, reuse or referencing. |
|||
| You want to attach the function to an object as a method. Named functions make it clear what the method name is. | You need to define and invoke a function inline, like in a callback. Or make a function for a specific thing like a click handler. |
|||
| Readability is a concern. Named functions are easier to identify in stack traces and when reading code. | You want to define a function inside another function for encapsulation or closure. |
|||
| Caching or memoization is needed. Named functions can be stored and reused easily. | The function name is not important in the current context or would not make code clearer. |
|||
| | You want to use an anonymous function with higher order functions like `.filter()`, `.map()`, etc. |

Anonymous function can also handle recursive calls if it was given a name but generally that doesn't happen. If you want to have recursion in you function then use named functions not anonymous ones.

*Summary:*

- Named functions have a name and can be called directly. Anonymous functions do not have a bound name.
- Named functions are hoisted, anonymous functions are not.
- Named functions have benefits for recursion, debugging and readability.
- Use named functions for recursion, reusability and readability.
- Use anonymous functions for throwaways that don't require naming.

*Example:*

```{.js .numberLines}
console.log(anon_sum_hoisted(1, 2, 3, 4, 5)); // 15
function anon_sum_hoisted(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(anon_sum_not_hoisted(1, 2, 3, 4, 5)); // Uncaught ReferenceError: Cannot access 'anon_sum_not_hoisted' before initialization
let anon_sum_not_hoisted = function (...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
};

anon_sum_not_hoisted(1, 2, 3, 4, 5);  // 15
                                      // function is accessible after definition via variable name
```

The second function definition `anon_sum_not_hoisted` is not hoisted to the top of the file and it's not accessible before the definition line.

Notice that since `anon_sum_not_hoisted` is an anonymous function the inline function definition doesn't have a name you can also have a name in that function but it will be only accessible inside the function.

The anonymous function is declared and initialized when their definition is evaluated at parse time before runtime, and it's available for **invocation (function calling)** right away.

The JavaScript engine compiles the source code before execution. This parses and evaluates function definitions.

*Example:*

```{.js .numberLines}
// Anonymous function declared and initialized here
const myFunc = function() {
  console.log('Hi!'); 
};

// Runtime starts here
myFunc(); // 'Hi!'
```

Anonymous function can has a name but it will be only accessible inside the function and if you try to access it outside the function you will get a `ReferenceError`.

## Nesting Functions in JavaScript

Functions in JavaScript can be nested inside other functions. This is useful for encapsulation. Nested functions are only accessible inside the function they are nested in.

When nesting functions you can even return the nested function from the outer function. This is called a ***closure***. The nested function will still have access to the outer function's variables even after the outer function has returned.

::::: columns
::: column
*Example 1:*

```{.js .numberLines}
function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    message = `${message} ${fName} ${lName}`;
  }
  concatMsg();
  return message;
}

console.log(sayMessage("Osama", "Mohamed"));
```

---

*Example 2:*

```{.js .numberLines}
function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    return `${message} ${fName} ${lName}`;
  }
  return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));
```

---

*Example 3:*

```{.js .numberLines}
function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));
```

:::
::: column

*Example 4:*

```{.js .numberLines}
function get_info(first_name, last_name, birth_year) {
  function full_name() {
    return `${first_name} ${last_name}`;
  }

  function age() {
    return 2023 - birth_year;
  }

  function info() {
    let info = `Your name is ${full_name()} and you are ${age()} yo`;
    return info;
  }

  return info();
}

console.log(get_info("Mohamed", "Ahmed", 2010));
```

:::
:::::

\pagebreak

## Arrow Function

Arrow functions is JavaScript are a shorthand for writing functions. They are written using the `=>` syntax. They are anonymous functions and must be stored in a variable to be used.

Since they are anonymous functions they are given no name and you also don't need to use the `function` keyword.

*Example:*

```{.js .numberLines}
// get the square root of the sum of two numbers
let sum_root = (num1, num2) => {
  sum = num1 + num2
  return Math.sqrt(sum)
}
console.log(sum_root(10, 6));  // 4
```

In arrow functions you can remove the `( )` if you have only one parameter, you can also remove the `{ }` and the `return` keyword if you have only one statement. Also if you have no parameters at all you can replace the empty parenthesis `( )` with underscore `_`

```{.js .numberLines}
// Example of removing `return` and `{ }`
let get_sum = (num1, num2) => num1 + num2
console.log(get_sum(30, 20)); // 50

// Example of removing `( )`, `{ }`, and `return`
let plus30 = num => num + 30
console.log(plus30(30));  // 60

// Example of replacing `( )` with `_`
let get30 = _ => 30
console.log(get30(30)); // 30
```

## Variable Scope

The scope of a variable is the region of your program in which it is defined. JavaScript variable scope can be either local or global. **Global scope** variables are accessible from anywhere in your code. **Local scope** variables are only accessible from within the function or block that they are defined.

When you declare a variable outside of any function, it is called a global variable, because it is available to any other code in the current document. When you declare a variable within a function, it is called a local variable, because it is available only within that function.

::::: columns
::: column

*Example 1:*

```{.js .numberLines}
var a = 1;
let b = 2;

function scope() {
  console.log(`a = ${a}`);  // undefined
  console.log(`b = ${b}`);  // Cannot access 'b' before initialization
  var a = 10;
  let b = 20;
}

scope();

console.log(a); // 1
console.log(b); // 2
```

:::
::: column

*Example 2:*

```{.js .numberLines}
var c = 1;
let d = 2;

function scope() {
  var c = 10;
  let d = 20;
  console.log(`c = ${c}`);  // 10
  console.log(`d = ${d}`);  // 20
}

scope();

console.log(c); // 1
console.log(d); // 2
```

:::
:::::

In both examples we see that the scope of variables defined inside a function is only the function.

In *example 1* if you comment the line `let b = 2;` inside the function you will get `b = 2`, also if you comment the line `var a = 10;` inside the function you will get `a = 1`.

Functions have their own scope in JavaScript. Variables defined inside a function are not accessible from outside the function but variables defined outside a function are accessible from inside the function.

Loops, if statements, and other blocks of code do not have their own scope. Variables defined inside a block of code are accessible from outside the block. This behavior depend on whether you used `var`, `let`, or `const` to define the variable`/`constant because `var` is function scoped but not block scoped but `let` and `const` are function and block scoped.

::::: columns
::: column

*Example 1:*

```{.js .numberLines}
let a = 5;
var b = 3;

if (true) {
  // This is a different variable than the 
  // one defined before and if it wasn't you
  // could have got an error because you
  // can't redeclare a variable using `let`
  let a = 50; 
  // This overwrites the variable b
  var b = 30; 
  console.log(a); // 50
  console.log(b); // 30
}
console.log(a); // 5
console.log(b); // 30 not 3
```

:::
::: column

*Example 2:*

```{.js .numberLines}
// notice here a uses `var` and b uses `let` 
var a = 5;
let b = 3;

if (true) {
  console.log(a); // 5
  console.log(b); // Cannot access 'b' before initialization
  // This overwrites the variable a
  var a = 50;
  // This is a different variable than the one defined before
  let b = 30; 
}
console.log(a); // 5
console.log(b); // 30 not 3
```

:::
:::::

The `Cannot access 'b' before initialization` error happens because the `console.log()` has found a variable `b` in the block scope but it's not initialized yet so it throws an error. This part of the code is called the ***Temporal Dead Zone (TDZ)***.

***Temporal Dead Zone (TDZ)*** is the area of block where a variable is inaccessible until the moment the computer completely initializes it with a value.

<!-- Execution context -->
<!-- Laxical Environment -->

The last scope we are going to discuss is the ***Lexical Scope***. Since we can nest functions in JavaScript, functions can be defined inside other functions. The inner function can access the variables of the outer function but the outer function cannot access the variables of the inner function this is the ***Lexical Scope***.

:::::{.columns .ragged}

*Example 1:*

```{.js .numberLines}
function outer1(){
  let a = 10;
  function inner(){
    console.log(a); // 10
  }
  inner();
}

outer1()
```

\columnbreak

*Example 2:*

```{.js .numberLines}
function outer2(){
  let a = 10;
  function inner(){
    let a = 100;
    console.log(a); // 100
  }
  console.log(a); // 10
  inner();
}

outer2()
```

:::::

\pagebreak

*Example 3:*

```{.js .numberLines}
function outer() {
  let a = 10;
  function inner() {
    let a = 100;
    let b = 20;
    console.log(a); // 100
  }
  inner();
  console.log(b); // Uncaught ReferenceError: b is not defined
}

outer();
```

# Some Notes From Articles

- **[Read this JavaScript.info article](https://javascript.info/function-expressions) about function expressions the whole article is important and has many valuable information.**

- Also Search for a YouTube video to explain **callback functions**.

- The Last Thing is to read [this article](https://www.javascripttutorial.net/javascript-call-stack/#) about **call stack** and **execution contexts** (Global execution context & function execution contexts) in JavaScript.

---

A call stack is a way for the JavaScript engine to keep track of its place in code that calls multiple functions. It has the information on what function is currently being run and what functions are invoked from within that function…

Whenever a function is called, the JavaScript engine creates a function execution context for the function, pushes it on top of the call stack, and starts executing the function.

When the JavaScript engine executes this script, it places the global execution context denoted by `main()` or `global()` function on the call stack.

The call stack has a fixed size, depending on the implementation of the host environment, either the web browser or *Node.js*. If the number of execution contexts exceeds the size of the stack, a stack overflow error will occur.

\begin{center}
\textbf{\textit{Asynchronous JavaScript}}
\end{center}

**JavaScript is a single-threaded programming language**. This means that the **JavaScript engine has only one call stack**. Therefore, **it only can do one thing at a time**.

When executing a script, the **JavaScript engine executes code from top to bottom**, line by line. In other words, it is **synchronous**.

**Asynchronous** means the **JavaScript engine can execute other tasks while waiting for another task to be completed**. For example, the JavaScript engine can:

1. Request for data from a remote server.
2. Display a spinner
3. When the data is available, display it on the webpage.

To do this, the JavaScript engine uses an **event loop**.

---

some of the code you are calling when you invoke a built in browser function couldn't be written in JavaScript - many of these functions are calling parts of the background browser code, which is written largely in low-level system languages like C++, not web languages like JavaScript.

some built-in browser functions are not part of the core JavaScript language - some are defined as part of browser APIs, which build on top of the default language to provide even more functionality.

---

**Functions** that are part of objects are called **methods**.

Some functions require parameters to be specified when you are invoking them - these are values that need to be included inside the function parentheses, which it needs to do its job properly. Function **Parameters** are sometimes called **arguments**, **properties**, or even *attributes*.

Take a look at [this exercise](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#active_learning_playing_with_scope).

Unlike python JavaScript doesn't return multiple values from a function but you can return a single array of multiple values.

---

**Think about the idea of creating a function library. As you go further into your programming career, you'll start doing the same kinds of things over and over again. It is a good idea to create your own library of utility functions to do these sorts of things. You can copy them over to new code, or even just apply them to HTML pages wherever you need them.**

---

A **parameter** is the variable listed inside the parentheses in the function declaration (it’s a declaration time term). An **argument** is the value that is passed to the function when it is called (it’s a call time term).

We declare functions listing their parameters, then call them passing arguments.

Function **parameters** are the items listed between the parentheses **in the function declaration**. Function **arguments** are the **actual values** we decide to pass to the function.

A function parameter is just a **placeholder** for some future value

::: {.columns columngap=2.5em column-rule="0pt solid black"}

In this code We’re passing in a function call `favoriteAnimal('Goat')` as an argument in a different function call `log()`

\columnbreak

```{.js .numberLines}
 function favoriteAnimal(animal) {
   return animal + " is my favorite animal!"
 }

 console.log(favoriteAnimal('Goat'))
```

:::

If a same-named variable is declared inside the function then it shadows the outer one. It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.

::: {.columns .ragged columngap=2.5em column-rule="0pt solid black"}

When the function is called in lines `*` and `**`, the given values are copied to local variables `from` and `text`. Then the function uses them.

Here’s one more example: we have a variable `from` and pass it to the function. Please note: the function changes `from`, but the change is not seen outside, because a function always gets a copy of the value:

\columnbreak

```{.js .numberLines}
function showMessage(from, text) {
  from = '*' + from + '*'; // make "from" look nicer
  alert( from + ': ' + text );
}

let from = "Ann";
showMessage(from, "Hello"); // *Ann*: Hello
// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann
```

:::

---

::: {.columns .ragged columngap=2.5em column-rule="0.0pt solid black"}

When using default function parameters you can have complex expression that are the default value of the parameter, for example it can be a function call.

\columnbreak

```{.js .numberLines}
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}
```

:::

---

::: {.columns .ragged columngap=2.5em column-rule="0.0pt solid black"}

If a function is called, but an argument is not provided, then the corresponding value becomes `undefined`.

For instance, the aforementioned function `showMessage(from, text)` can be called with a single argument: `showMessage("Ann");`

That’s not an error. Such a call would output `"*Ann*: undefined"`. As the value for text isn’t passed, it becomes undefined.

\columnbreak

We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using `=`

```{.js .numberLines}
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
```

:::

---

**Default parameters in old JavaScript code**

::: {.columns .ragged columngap=2.5em column-rule="0.0pt solid black"}

In older JS code people used to see a trick like this:

```{.js .numberLines}
function showMessage(from, text) {
  if (text === undefined) {
    text = 'no text given';
  }

  alert( from + ": " + text );
}
```

\columnbreak

They also used the or `||` operator

```{.js .numberLines}
function showMessage(from, text) {
  // If the value of text is falsy, assign the default value
  // this assumes that text == "" is the same as no text at all
  text = text || 'no text given';
  ...
}
```

:::

You can also use the *nullish coalescing operator* `??` operator like that `alert(count ?? "unknown");`.

---

Function return value can also be another function call.

::: {.columns .ragged columngap=2.5em column-rule="0.0pt solid black"}

**If a function does not return a value, it is the same as if it returns `undefined`**

\columnbreak

```{.js .numberLines}
function doNothing() { /* empty */ }
alert( doNothing() === undefined ); // true
```

:::

---

::: {.columns .ragged columngap=2.5em column-rule="0.0pt solid black"}

Never add a newline between `return` and the value because JavaScript assumes a semicolon `;` after `return` So, it effectively becomes an empty `return`.

you can use this workaround

\columnbreak

```{.js .numberLines}
return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )
```

:::

Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

For instance, functions that start with `show` usually show something.

::: {.columns .ragged columngap=2.5em column-rule="0.0pt solid black"}

Function starting with…

- `get…` – return a value,
- `calc…` – calculate something,
- `create…` – create something,
- `check…` – check something and return a boolean, etc.

\columnbreak

```{.js .numberLines}
showMessage(..) // shows a message
getAge(..)  // returns the age (gets it somehow)
calcSum(..) // calculates a sum and returns the result
createForm(..)  // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false
```

:::

With prefixes in place, a glance at a function name gives an understanding what kind of work it does and what kind of value it returns.

**One function – one action**

A function should do exactly what is suggested by its name, no more.

Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).

A few examples of breaking this rule:

`checkPermission` – would be bad if it displays the `access granted/denied` message (should only perform the check and return the result).

Functions that are used very often sometimes have **ultrashort names**. For example, the jQuery framework defines a function with `$`. The Lodash library has its core function named `_`.

When we define a function and assign it to a variable it is called a **Function Expression**.

In JavaScript you can assign a function to a variable and use that variable to call the function. Since you have that ability you can also assign one function to multiple variables and call it from any of them.

## Important Exercise

Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

**Strings are immutable**

::: {.columns .ragged columngap=2.5em column-rule="0.0pt solid black"}

```{.js .numberLines}
function capitalize(str) {
 str0 = str[0];
 console.log(str0); // m
 strcap = str[0].toUpperCase();
 console.log(strcap); // M
 str[0] = str[0].toUpperCase();
 return str;
}

// Stays "mohamed" not "Mohamed" because strings are immutable so you have to create a new string
console.log(capitalize("mohamed")); // mohamed
```

\columnbreak

```{.js .numberLines}
function capitalize(str) {
 newStr = str[0].toUpperCase() + str.substring(1, str.length);
 return newStr;
}
console.log(capitalize("mohamed")); // Mohamed

```

:::

---

***Knowledge check questions:***

- What are functions useful for?
- How do you invoke a function?
- What are anonymous functions?
- What is function scope?
- What are return values?
- What are arrow functions?

***Extra content:***

- [What’s the difference between using “let” and “var”? - stackoverflow](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var#:~:text=The%20main%20difference%20is%20scoping,(hence%20the%20block%20scope))
- [How JavaScript Code is executed?](https://youtu.be/iLWTnMzWtj4)

---

# Higher Order Functions

A higher order function in JavaScript is a function that accepts another function as a parameter and/or returns a function.

## `map`

`map` is an array method that **creates a new array** populated with the results of calling a provided function on every element in the calling array.

The array returned by `map` will be the **same length** as the array passed in so you can't for example remove some elements from the array using `map`.

Map function returns A New Array

**Syntax**: `map(callBackFunction(Element, Index, Array) { }, thisArg)`

- Element: The current element being processed in the array.
- Index: The index of the current element being processed in the array. (**Optional**)
- Array: The Current Array. (**Optional**)
- thisArg: Value to use as `this` when executing callback. (**Optional**)

---

Side Note: To check if a variable is equal to `NaN` you can use the `isNaN()` function. Don't use `variable === NaN` because it will always return `false` because `NaN` is not equal to itself.

::: {.columns .ragged columngap=2.5em column-rule="0.0pt solid black"}

For example this code will never print `True` to the \linebreak console.

\columnbreak

```{.js .numberLines}
if (Number("a") === Number("a")) {
  console.log("True");
}
```

:::

::: {.columns .ragged columngap=2.5em column-rule="0.0pt solid black"}

Instead This code prints:

\columnbreak

```{.js .numberLines}
if (isNaN(Number("a")) === isNaN(Number("a"))) {
  console.log("True");  // True
}
```

:::

---

## `filter`

`filter` is an array method that **creates a new array** with all elements that pass the test implemented by the provided function.

The array returned by `filter` will have the **same** or **different length** than the array passed in based on the condition you provided.

Filter function can't change the elements of the array it only returns the elements that pass the test.

Filter function returns A New Array

**Syntax**: `filter(callBackFunction(Element, Index, Array) { }, thisArg)`

- Element: The current element being processed in the array.
- Index: The index of the current element being processed in the array. (**Optional**)
- Array: The Current Array. (**Optional**)
- thisArg: Value to use as `this` when executing callback. (**Optional**)

---

## `reduce`

`reduce` is an array method that **executes a reducer function** (that you provide) on each element of the array, resulting in a single output value.

Syntax: `reduce(callBackFunction(accum, curVal, curValIndex, srcArr) { }, initialValue)`

The reducer function takes four arguments:

- Accumulator (`accum`): The accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied (see below).
- Current Value (`curVal`): The current element being processed in the array.
- Current Value Index (`curValIndex`): The index of the current element being processed in the array. Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
- Source Array (`srcArr`): The array `reduce()` was called upon.
- Initial Value (`initialValue`): A value to use as the first argument to the first call of the callback. **If no initialValue is supplied, the first element in the array will be used as the initial accumulator value** and skipped as currentValue. Calling `reduce()` on an empty array without an initialValue will throw an error.

Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value.

---

## `forEach`

`forEach` is an array method that **executes a provided function once for each array element**.

`forEach` function returns `undefined`. It doesn't return anything nor create a new array.

**Syntax**: `forEach(callBackFunction(Element, Index, Array) { }, thisArg)`

- Element: The current element being processed in the array.
- Index: The index of the current element being processed in the array. (**Optional**)
- Array: The Current Array. (**Optional**)
- thisArg: Value to use as `this` when executing callback. (**Optional**)

---

**You may need to return to `forEach` again after learning about DOM.**

**You may also need to try `thisArg` to know what is the different uses of it**

[Solve this again](https://youtu.be/Wn-JbwQLAlA)

---
