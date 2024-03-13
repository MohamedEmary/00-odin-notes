---
title: \huge Default Styles
date: December 5, 2023
---

# Default Styles

Browsers have default styles for HTML elements. These styles are not consistent across browsers. To make sure that your website looks the same in all browsers, you may need to reset the default styles.

In general, these inconsistencies are going to be pretty minor, but they DO exist, so in many cases as a developer, you’re going to end up undoing or redoing all of this default styling to make your site look exactly how you envision it.

To counter this, many developers start their projects with a “CSS Reset”; a file that undoes browser defaults, so that every element behaves the same in every browser but that has a cost that you will end undoing, or redoing a lot of the styles that a reset will provide for you.

# Assignment

Unfortunately I didn't summarize the articles in the assignment section:

- [The Meyer Reset](https://meyerweb.com/eric/tools/css/reset/) is almost certainly the most popular. It’s very simple and basically removes every default style.

- [Normalize.css](http://nicolasgallagher.com/about-normalize-css/) is another popular one. It’s a little different in that it doesn’t remove all the default styles, but tweaks them slightly to ensure that browsers are consistent. Currently, the article’s download link is dead. If you want to install normalize.css for your project, download it from [normalize.css official website](https://necolas.github.io/normalize.css/) or use the instructions found in the [normalize.css repository’s](https://github.com/necolas/normalize.css) README.md file. If you are unsure which method to use, go with the NPM package install.

- [Reboot, Resets and Reasoning](https://css-tricks.com/reboot-resets-reasoning/) is a CSS tricks article that goes a little more in-depth, and mentions a few other popular resets.

- Maybe more trivial than useful, this [Browser Default Styles](https://browserdefaultstyles.com/) site is fun to play with.
