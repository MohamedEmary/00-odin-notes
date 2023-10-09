---
title: Installing Node.js
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
# linkcolor table of figures links and document inner links and urlcolor for regular links
linkcolor: black
urlcolor: blue
include-before:
# Pagebreak after main title
- '`\newpage{}`{=latex}'

header-includes:
# # Fancy Header
# - \usepackage{fancyhdr}
# - \pagestyle{fancy}

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
---

# What is Node.js

Installation Commands for NVM and Node.js are in [**Lesson Page**](https://www.theodinproject.com/lessons/foundations-installing-node-js)

Node.js is a JavaScript runtime environment that allows you to run JavaScript outside of your web browser.

**`nvm`: Node Version Manager**

**`npm`: Node Package Manager**

Node provides an interactive console which lets you run and edit your javascript code right in your terminal

---

`nvm` only works in Linux and Mac OS but there is an alternative for Windows see [this](https://github.com/coreybutler/nvm-windows).
