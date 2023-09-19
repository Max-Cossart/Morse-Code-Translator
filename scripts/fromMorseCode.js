import { englishObj } from "../data/data.js";
import { error } from "./script.js";

export function morseCode(phrase) {
  let english = phrase
    .trim()
    .split(" ")
    .map((item) => {
      if (englishObj[item] === undefined) {
        error("One or more of the items entered is not recognised");
        throw new Error(message);
      } else {
        return englishObj[item];
      }
    })
    .join("")
    .toLowerCase();
  let translated = english.charAt(0).toUpperCase() + english.slice(1);
  return translated;
}
