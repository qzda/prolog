function prolog(msg) {
  let _msg = msg;

  function log() {
    console.log(_msg);
  }

  /**
   * @param {string} c
   */
  function color(c) {
    switch (c) {
      case "red":
        _msg = `\x1b[31m${_msg}\x1b[0m`;
        break;
      case "green":
        _msg = `\x1b[32m${_msg}\x1b[0m`;
        break;
      case "yellow":
        _msg = `\x1b[33m${_msg}\x1b[0m`;
        break;
      case "blue":
        _msg = `\x1b[34m${_msg}\x1b[0m`;
        break;
      default:
        break;
    }

    return prolog(_msg);
  }

  /**
   * @param {string} c
   */
  function bg(c) {
    return prolog(_msg);
  }

  return {
    bg,
    log,
    color,
  };
}
