---
title: \huge CSS Units
---
# CSS Units

CSS has multiple units for sizing elements. Some are relative, some are absolute and some are based on the viewport.

<!-- , some are based on the parent element. Some are based on the font size, some are based on the screen size. Some are based on the size of the element itself. -->

## Absolute Units

Absolute units are those that are always the same in any context. `px` is the only absolute unit you should be using for web projects. Other absolute units are more suited for print setting because they are related to physical units such as `in` (inch) and `cm` (centimeter).

| Unit | Name                | Equivalent to              |
| ---- | ------------------- | -------------------------- |
| `cm` | Centimeters         | `1cm = 37.8px = 25.2/64in` |
| `mm` | Millimeters         | `1mm = 1/10th of 1cm`      |
| `Q`  | Quarter-millimeters | `1Q = 1/40th of 1cm`       |
| `in` | Inches              | `1in = 2.54cm = 96px`      |
| `pc` | Picas               | `1pc = 1/6th of 1in`       |
| `pt` | Points              | `1pt = 1/72nd of 1in`      |
| `px` | Pixels              | `1px = 1/96th of 1in`      |

Most of these units are more useful when used for print, rather than screen output.

## Relative units

Relative units are units that are relative to something else, perhaps the size of the parent element's font, or the size of the viewport. `em` and `rem` both refer to a font size, though they are often used to define other sizes in CSS. You’ll see both of them often so we’re going to explain both, but **as a rule-of-thumb, prefer `rem`**.

| Unit         | Relative to                                                                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `em`         | Font size of the parent, in the case of typographical properties like `font-size`, and font size of the element itself, in the case of other properties like `width`. |
| `ex`         | x-height of the element's font.                                                                                                                                       |
| `ch`         | The advance measure (width) of the glyph "0" of the element's font.                                                                                                   |
| `rem`        | Font size of the root element.                                                                                                                                        |
| `lh`         | Line height of the element.                                                                                                                                           |
| `rlh`        | Line height of the root element. When used on the `font-size` or `line-height` properties of the root element, it refers to the properties' initial value.            |
| `vw`         | Percentage of the viewport's width.                                                                                                                                   |
| `vh`         | Percentage of the viewport's height.                                                                                                                                  |
| `vmin`       | Percentage of the viewport's smaller dimension.                                                                                                                       |
| `vmax`       | Percentage of the viewport's larger dimension.                                                                                                                        |
| `vb`         | Percentage of the size of the initial containing block in the direction of the root element's block axis.                                                             |
| `vi`         | Percentage of the size of the initial containing block in the direction of the root element's inline axis.                                                            |
| `svw`, `svh` | Percentage of the small viewport's width and height, respectively.                                                                                                    |
| `lvw`, `lvh` | Percentage of the large viewport's width and height, respectively.                                                                                                    |
| `dvw`, `dvh` | Percentage of the dynamic viewport's width and height, respectively.                                                                                                  |

`1em` is the `font-size` of an **element** (**or the element’s parent** if you’re using it to set `font-size`). So, for example, if an element’s `font-size` is `16px`, then setting its width to `4em` would make its width `64px` (`16 * 4 == 64`).

`1rem` is the `font-size` of the **root element** (either `:root` or `html`). The math works the same with `rem` as it did with `em`, but without the added complexity of keeping track of the parent’s font size. Relying on `em` could mean that a particular size could change if the context changes, which is very likely not the behavior you want.

## Viewport Units

The units `vh` and `vw` relate to the size of the viewport. Specifically, `1vh` is equal to `1%` of the viewport height and `1vw` is equal to `1%` of the viewport width. These can be useful any time you want something to be sized relative to the viewport, examples including full-height heroes, full-screen app-like interfaces.

# Important note for me

Read the 3 articles at the assignment section of this lesson again with more attention.
