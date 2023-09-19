import { morseCodeObj } from "../data/data.js";

export function english(phrase) {
  let morseCode = phrase
    .trim()
    .split("")
    .map((letter) => letter.toUpperCase())
    .map((letter) => morseCodeObj[letter]);

  let translated = morseCode.join(" ");

  return translated;
}
