---
title: \huge CSS Functions
date: October 26, 2023
---

# Watch These Two Videos

1. [`min()`, `max()`, and `clamp()` are CSS magic!](https://youtu.be/U9VF-4euyRo)

2. [Mastering The CSS Calculation](https://youtu.be/Sujl_fq_Ofc)

# Some Notes From Articles

According to [The Elements of Typographic Style](http://webtypography.net/2.1.2#:%7E:text=%E2%80%9CAnything%20from%2045%20to%2075,is%2040%20to%2050%20characters.%E2%80%9D) by Robert Bringhurst:

> *"anything from 45 to 75 characters is widely regarded as a satisfactory length of line for a single-column page set in a serifed text face in a text size."*

To ensure that your text blocks are not narrower than 45 characters or wider than 75 characters, use `clamp()` and the ch (0-width [character advance](https://developer.mozilla.org/docs/Web/CSS/length)) unit:

```{.css .numberLines}
p {
  width: clamp(45ch, 50%, 75ch);
}
```

`min()` function can set a "max" value and `max()` sets a "min" value

# References

[The complete list of all CSS functions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions) and how they are used.

Read [this great article](https://web.dev/min-max-clamp/) for a more in-depth look at `min`, `max`, and `clamp` in action, with animated examples.
