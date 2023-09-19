export const morseCodeObj = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  V: "...-",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": "/",
};

export const englishObj = Object.fromEntries(
  Object.entries(morseCodeObj).map(([key, value]) => [value, key])
);
