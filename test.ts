import prolog, { Colors, Backgrounds } from "./index";

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
