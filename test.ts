import prolog, { Colors, Backgrounds, OtherStyles } from "./index";

console.log(
  Object.keys(OtherStyles)
    .map((key) => prolog[key](key))
    .join(" ")
);

console.log(
  Object.keys(Colors)
    .map((key) => prolog[key](key))
    .join(" ")
);

console.log(
  Object.keys(Backgrounds)
    .map((key) => prolog[key](key))
    .join(" ")
);
