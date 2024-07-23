# pro-log

## use

```js
import prolog from "pro-log"

prolog("hello").color("green").bg("gray").log()
// or
prolog({
  msg: "hello",
  color: "red",
  bg: "gray"
}).log()
```
