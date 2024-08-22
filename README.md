# prolog

![prolog.png](https://qzda.netlify.app/prolog.png)

## use

```ts
Object.keys(OtherStyles).forEach((style) => {
  logs.push(prolog[style](style));
});

Object.keys(Colors).forEach((color) => {
  logs.push(prolog[color](color));
});

Object.keys(Backgrounds).forEach((bg) => {
  logs.push(prolog[bg](bg));
});
```

## style

```ts
const Colors = {
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37,
  brightBlack: 90,
  brightRed: 91,
  brightGreen: 92,
  brightYellow: 93,
  brightBlue: 94,
  brightMagenta: 95,
  brightCyan: 96,
  brightWhite: 97,
} as const;

const Backgrounds = {
  bgBlack: 40,
  bgRed: 41,
  bgGreen: 42,
  bgYellow: 43,
  bgBlue: 44,
  bgMagenta: 45,
  bgCyan: 46,
  bgWhite: 47,
  bgBrightBlack: 100,
  bgBrightRed: 101,
  bgBrightGreen: 102,
  bgBrightYellow: 103,
  bgBrightBlue: 104,
  bgBrightMagenta: 105,
  bgBrightCyan: 106,
  bgBrightWhite: 107,
} as const;

const OtherStyles = {
  bold: 1,
  italic: 3,
  underline: 4,
} as const;
```
