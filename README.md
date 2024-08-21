# prolog [![npm](https://img.shields.io/npm/v/v)](https://www.npmjs.com/package/@qzda/prolog)

![prolog.png](https://qzda.netlify.app/prolog.png)

## use

```js
import prolog, { Colors, Backgrounds } from "@qzda/prolog";

const table = Object.keys(Backgrounds).reduce((obj, bg) => {
  if (!bg.startsWith("bright")) {
    obj[bg] = {};
    Object.keys(Colors).forEach((color) => {
      obj[bg][color] = prolog[bg](prolog[color]("hello"));
      if (!color.startsWith("bright")) {
        obj[bg][color] = prolog[bg](prolog[color]("hello"));
      }
    });
  }
  return obj;
}, {});

console.table(table);
```
