---
title: letterline
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
 - \usepackage{lastpage, fancyhdr}
 - \pagestyle{fancy}
 - \fancypagestyle{plain}{}
 - \fancyhf{}
 - \renewcommand{\headrulewidth}{0pt}
 - \rfoot{Page \thepage \hspace{1pt} of \pageref{LastPage}}

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
#  - \renewcommand{LettrineTextFont}{\normalfont}
 - \usepackage{Typocaps}   # The package need to be changed to use another font
 - \renewcommand{\LettrineFontHook}{\Typocapsfamily} # \GoudyInfamily is the font if you want to change
---

# Header

\lettrine{L}orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.



