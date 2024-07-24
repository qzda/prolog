# prolog

![prolog.png](https://qzda.netlify.app/prolog.png)

## use

```js
import prolog, { Colors, Backgrounds } from "@qzda/prolog";

const table = Object.keys(Backgrounds).reduce((obj, bg) => {
  if (!bg.startsWith("bright")) {
    obj[bg] = {};
    Object.keys(Colors).forEach((color) => {
      if (!color.startsWith("bright")) {
        obj[bg][color] = prolog({
          msg: "hello",
          bg,
          color,
        });
      }
    });
  }
  return obj;
}, {});

console.table(table);
```
