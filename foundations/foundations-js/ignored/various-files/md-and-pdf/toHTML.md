---
title: Website
# subtitle: 

# Command: `-L scholarly-metadata.lua -L format-authors.lua`
# institute:
#   # OR Faculty of Computers and Artificial Intelligence, Benha University (See whether to remove Comma in [Intelligence, Benha] or not)
#   - first: Faculty of Computer Science, Benha University

#   # - second: Second, Newer Company
# author:
#   - Mohamed Emary:
#       institute:
#         - first
#       correspondence: yes
#       email: mohamed21074@fci.bu.edu.eg

author: [Mohamed Emary]

# author:
# - Mohamed Ahmed Emary^[**Benha Faculty of Computers and Artificial Intelligence, <mohamed21074@fci.bu.edu.eg>**]
abstract: 
date: \today

paper: a4
toc: true
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
autoEqnLabels: true
theme: copenhagen
# linkcolor table of figures links and document inner links and urlcolor for regular links
linkcolor: black
urlcolor: blue

include-before:
# Pagebreak after main title
- '`\newpage{}`{=latex}'

header-includes:
# # Fancy Header
#  - \usepackage{lastpage}
#  - \usepackage{fancyhdr}
#  - \pagestyle{fancy}
#  - \fancypagestyle{plain}{}
#  - \fancyhf{}
#  - \renewcommand{\headrulewidth}{0pt}
#  - \rfoot{Page \thepage \hspace{1pt} of \pageref{LastPage}}

# Code blocks linebreaks
 - \usepackage{fvextra}
 - \DefineVerbatimEnvironment{Highlighting}{Verbatim}{breaklines,commandchars=\\\{\}}

# # Graphs & function plots
#  - \usepackage{pgfplots}
#  - \usepackage{tikz}

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
---

# This is my website

[M]{.dropcap}y website contains lists, headers of different levels, foot notes, links, images, tables, code blocks, math equations, and citations.

## Lists

This is a list of items:

- Item 1
  - Item 11
  - Item 12
  - Item 13
- Item 3
- Item 2
- Item 3

This is a list of ordered items:

1. Item 1
   1. Item 2
   2. Item 3
2. Item 2
3. Item 3

## Headers

This is a header of level 2

### Header of level 3

## Foot notes

This is a foot note[^1]

[^1]: This is the text of the foot note

## Links

This is a link to [Google](https://www.google.com)

## Images

This is an image:

<!-- ![This is a random cat image with a reference and width of 50%](https://cataas.com/cat){width=50% #fig:cat} -->

## Tables

This is a table:

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

## Code blocks

This is a code block:

```python
def function():
    return 0
```

## Math equations

This is a math equation:

$$e = mc^2$$

$$\frac{1}{2} = \frac{1}{3} + \frac{1}{6}$$

$$\lim_{x \to \infty} \exp(-x) = 0$$

### A Huge Equation

\begin{align*}
Q(\lambda,\hat{\lambda}) = -\frac{1}{2} P{(O \mid \lambda )} \sum_s \sum_m \sum_t \gamma_m^{(s)} \\ (t) \left( n \log(2 \pi ) + \log \left| C_m^{(s)} \right| + \left( \mathbf{o}_t - \hat{\mu}_m^{(s)} \right) ^T C_m^{(s)-1} \left(\mathbf{o}_t - \hat{\mu}_m^{(s)}\right) \right)
\end{align*}

\begin{align*}
1+1 = 2
\\
2+2 = 4
\end{align*}

---

\begin{align*}
y &= ax^2 + bx + c \\ &= a(x + \frac{b}{2a})^2 - \frac{b^2}{4a} + c
\end{align*}

## Citations

This is a citation [@emary2020towards]

This is a reference to a figure [@fig:cat]

# References
