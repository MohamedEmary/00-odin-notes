---
title: JS Fundamentals Lesson 5
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

# Objects In JavaScript
