---
title: Understanding Errors Lesson
subtitle: 
author: [Mohamed Emary]
# author:
# - Mohamed Ahmed Emary^[**Benha Faculty of Computers and Artificial Intelligence, <mohamed21074@fci.bu.edu.eg>**]
abstract: 
date: \today
paper: a4
# toc: true
# toc-depth: 
# lof: true
geometry:
- top=20mm
- bottom=20mm
- right=20mm
- left=20mm
fontfamily:
fontsize: 11pt
numbersections: yes
fig_caption: true
theme: copenhagen
linkcolor: black
urlcolor: blue
include-before:
# Pagebreak after main title
- '`\newpage{}`{=latex}'
header-includes:
# Code blocks linebreaks
 - \usepackage{fvextra}
 - \DefineVerbatimEnvironment{Highlighting}{Verbatim}{breaklines,commandchars=\\\{\}}

# Graphs & function plots
#  - \usepackage{pgfplots}
 - \usepackage{tikz}

# tcolorbox package
 - \usepackage[most]{tcolorbox}
# Figures with captions
 - \usepackage{float}
 - \makeatletter
 - \def\fps@figure{H} 
 - \makeatother
---

# The anatomy of an error

An error is a type of **object** built into the JS language, consisting of a name/type and a message

When you type a JavaScript code that has a problem and it throws an error, the error message will contain the following information:

- **Name/Type**: The name of the error. For example `ReferenceError`.
- **Message**: A description of the error.
- **Stack**: A **stack trace** that helps you understand when the error was thrown in your application, and what functions were called that led up to the error.

When you click the link in the stack trace, it will take you to the line of code that caused the error in sources tab in the dev tools.

## `ReferenceError`

A `ReferenceError` is thrown when one refers to a variable that is not declared and/or initialized within the current scope - or it has been spelled incorrectly!.

```{.js .numberLines}
const a = "Hello";
const b = "World";

console.log(c);  // error
```

![`ReferenceError` Message](images/understanding-errors/image.png)

Here, the error originates from the fourth line of script.js, which is displayed as a link under the error message with the text at `script.js:4`. If you click this link, most browsers will navigate to the exact line of code and the rest of your script in the Sources tab of the Developer Tools.

Sometimes your browser’s console will also display the column (or character) in the line at which the error is occurring. In our example, this would be at `script.js:4:13`.

---

**Stack trace** helps you understand when the error was thrown in your application, and what functions were called that led up to the error. So, for example, if we have the following code:

```{.js .numberLines}
const a = 5;
const b = 10;

function add() {
  return c;
}

function print() {
  add();
}

print();
```

Our function `print()` should call on `add()`, which returns a variable named `c`, which currently has not been declared. The corresponding error is as follows:

![Stack Trace in `ReferenceError` Message](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/foundations/javascript_basics/understanding_errors/imgs/01.png)

The stack trace tells us that:

1. `c is not defined` in scope of `add()`, which is declared on *line 5*
2. `add()` was called by `print()`, which was declared on *line 9*
3. `print()` itself was called on *line 12*.

Thus the stack trace lets you trace the evolution of an error back to its origin, which here is the declaration of `add()`.

## `SyntaxError`

A syntax error occurs when the code you are trying to run is not written correctly, i.e., in accordance with the grammatical rules of JavaScript. For example this:

::: {.columns .ragged columngap=2.5em column-rule="0.0pt solid black"}

will throw the following error, because we forgot the parentheses for `console.log()`!

\columnbreak

```{.js .numberLines}
function helloWorld() {
  console.log "Hello World!"
}
```

:::

![`SyntaxError` Message](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/foundations/javascript_basics/understanding_errors/imgs/02.png)

## `TypeError`

These errors are thrown for a few different reasons:

1. an operand or argument passed to a function is incompatible with the type expected by that operator or function;
2. or when attempting to modify a value that cannot be changed;
3. or when attempting to use a value in an inappropriate way.

A good note to keep in mind when faced with a `TypeError` is to consider the data type you are trying to run a method or operation against. You’ll likely find that it is not what you think, or the operation or method is not compatible with that type.

For Example:

```{.js .numberLines}
const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);
```

![`TypeError` Message](https://cdn.statically.io/gh/TheOdinProject/curriculum/4ed59981b4ce2c60b5b83bf7415d3127b61821f5/foundations/javascript_basics/understanding_errors/imgs/03.png)

## Difference Between Error and Warning and Exception

**Error** - An error indicates a problem that prevents the program from running or functioning properly. Errors will stop program execution if not handled. Examples include syntax errors, runtime errors like dividing by zero, logic error, etc. Errors must be fixed for the program to work as intended.

**Warning** - A warning indicates a potential problem that does not necessarily prevent the program from working. Warnings alert about issues like deprecated functions, unused variables, etc. Warnings do not stop execution. They are meant to inform developers of situations that could cause problems in the future if not addressed. Warnings may or may not need to be fixed.

**Exception** - An exception is an event during execution that disrupts the normal flow of the program. Exceptions are triggered by errors but are different than errors. When an error occurs, an exception can be thrown to signal that something went wrong. Exceptions can be caught and handled gracefully allowing execution to continue. Uncaught exceptions will crash the program.

## Tips for resolving errors

At this point, you might be wondering how we can resolve these errors.

1. Read the error carefully and try to understand it on your own.
2. use `console.log()`. There are other useful methods such as `console.table()`, `console.trace()`, and more! You can find additional methods [here](https://www.w3schools.com/jsref/obj_console.asp).
3. Use the debugger! [This tutorial](https://developer.chrome.com/docs/devtools/javascript/) dives into the Chrome Debugger.
4. Google the error!

---

# [What Went Wrong MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong)

**Logic errors**: These are errors where the syntax is actually correct but the code is not what you intended it to be, meaning that program runs successfully but gives incorrect results. These are often harder to fix than syntax errors, as there usually isn't an error message to direct you to the source of the error.

::: {.columns .ragged columngap=2.5em column-rule="0.0pt solid black"}

```{}
Uncaught TypeError: 
guessSubmit.addeventListener is not a 
function
number-game-errors.html:86:15
```

You may face the error above because of spelling the function name wrong.

\columnbreak

*for example:*

JavaScript is case-sensitive so

`addEventListener()`{.js} $\not =$ `addeventListener()`{.js}.

:::

---

::: {.columns .ragged columngap=2.5em column-rule="0.0pt solid black"}

You may face the error above because of spelling the element name, id, or class wrong or the element is not found or forgetting to use `#` or `.` before the element name, id, or class.

\columnbreak

```
Uncaught TypeError: Cannot set properties
of null (setting 'textContent')
```

:::

---

[`SyntaxError: expected expression, got 'string'`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_token) or [`SyntaxError: unterminated string literal`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unterminated_string_literal)

These errors generally mean that you've left off a string value's opening or closing quote mark.

In the first error above, string would be replaced with the unexpected character(s) that the browser found instead of a quote mark at the start of a string.

The second error means that the string has not been ended with a quote mark.

---

[***JavaScript error reference***](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)

<!-- Different types of errors in JS:

1. **Syntax errors**: Errors that occur when you make a typo that breaks the code.
2. **Runtime errors**: Errors that occur when the program is running.
3. **Logic errors**: Errors that occur when the program runs but does the wrong thing.
4. **Semantic errors**: Errors that occur when the program is running but does the wrong thing.
5. **System errors**: Errors that occur when the program is running but does the wrong thing. -->

<!--[Mozilla Communication channels](https://developer.mozilla.org/en-US/docs/MDN/Community/Communication_channels) -->