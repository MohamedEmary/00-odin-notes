---
title: JS Fundamentals Lesson 3
subtitle: 
# author: [Mohamed Emary]
author:
- Mohamed Ahmed Emary^[**Benha Faculty of Computers and Artificial Intelligence, mohamed21074@fci.bu.edu.eg**]
abstract: 
date: \today
paper: a4
# toc: true
# toc-depth: 
# lof: true
geometry:
- top=25mm
- bottom=25mm
- right=20mm
- left=20mm
fontfamily:
# fontsize: 10pt
numbersections: yes
fig_caption: true
theme: copenhagen
linkcolor: blue
include-before:
# Pagebreak after main title
- '`\newpage{}`{=latex}'
header-includes:
# Code blocks linebreaks
 - \usepackage{fvextra}
 - \DefineVerbatimEnvironment{Highlighting}{Verbatim}{breaklines,commandchars=\\\{\}}

#  - \usepackage{pgfplots}
#  - \usepackage{tikz}

# # Figures with captions
#  - \usepackage{float}
#  - \makeatletter
#  - \def\fps@figure{H} 
#  - \makeatother
---

# Nullish Coalescing Operator

The nullish coalescing operator `??` provides a short syntax for selecting a first “defined” variable from the list.

The difference between `||` and `??` is that the `??` checks only for `null` and `undefined`, while the `||` operator also checks for `0`, `false` and `''` (Falsy Values).

```{.js .numberLines}
let firstName = null;
let middleName = "";
let lastName = undefined;
let nickName = "Supercoder";
console.log(firstName ?? middleName ?? lastName ?? nickName ?? "Anonymous"); // "" empty string
console.log(firstName || middleName || lastName || nickName || "Anonymous"); // Supercoder
```

# Topics from Odin lesson page

> ***Important Note: I have studied this lesson topics from youtube videos not the links provided by The Odin Project***

- How to define and invoke different kinds of functions.
- How to use the return value.
- What function scope is.

In JavaScript, when defining a function, you don't have to write `let` before function parameters because function parameters are treated as variables within the function's scope. Therefore, they don't need to be declared with `let`, `const`, or `var`.
