import { englishObj } from "../data/data.js";

export function morseCode(phrase) {
  let english = phrase
    .trim()
    .split(" ")
    .map((item) => englishObj[item])
    .join("")
    .toLowerCase();
  let translated = english.charAt(0).toUpperCase() + english.slice(1);
  console.log("morse COde");
  return translated;
}
