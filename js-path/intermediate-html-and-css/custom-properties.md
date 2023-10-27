---
title: \huge Custom Properties
date: October 27, 2023
---

Watch these three videos:

1. [CSS Variables And Trainings](https://youtu.be/qATtKrSvvEo)

2. [How To Use CSS Variables ( Custom Properties )](https://youtu.be/vP3CWtAuIlU)

3. [An introduction to CSS custom properties](https://youtu.be/PHO6TBq_auI)

`var()` can have a callback value that returns a custom property value and the callback itself can be another custom propertyA value with a callback.

```{.css .numberLines}
.fallback {
  --color-text: white;

  background-color: var(--undeclared-property, black);
  color: var(--undeclared-again, var(--color-text, yellow));
}
```

This scope includes the selector the custom property was declared for as well as any descendants of that selector
