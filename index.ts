import { Backgrounds, Colors } from "./config";

type Color = keyof typeof Colors;
type Background = keyof typeof Backgrounds;

export default function prolog(config: {
  msg: string;
  color?: Color;
  bg?: Background;
}): string {
  let _msg = config.msg;

  function getBgText(b: Background) {
    return `\x1b[${Backgrounds[b]}m${_msg}\x1b[0m`;
  }

  function getColorText(c: Color) {
    return `\x1b[${Colors[c]}m${_msg}\x1b[0m`;
  }

  if (config.color) _msg = getColorText(config.color);
  if (config.bg) _msg = getBgText(config.bg);

  return _msg;
}
