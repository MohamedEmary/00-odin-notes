---
title: \huge Positioning
date: October 26, 2023
---

# CSS Positioning

These two videos cover nearly all the content in the lesson:

1. [CSS Positioning](https://youtu.be/4xGFEM3Zr7I)

2. [Z-Index](https://youtu.be/OhJqMZ2gGAc)

# Some Extra Notes

There are two other things that happen when you set position: relative; on an element that you should be aware of. One is that it introduces the ability to use z-index on that element, which doesn’t work with statically positioned elements. Even if you don’t set a z-index value, this element will now appear on top of any other statically positioned element. You can’t fight it by setting a higher z-index value on a statically positioned element.

Sticky positioning is really unique! A sticky element will just sit there like a static element, but as you scroll past it, if it’s parent element has room (usually: extra height) the sticky element will behave as if it’s fixed until that parent element is out of room. It sounds weird in words like that, but it’s easy to see what’s happening in a [demo](https://css-tricks.com/position-sticky-2/).
