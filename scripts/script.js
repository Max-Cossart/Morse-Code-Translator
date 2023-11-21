import { english } from "./fromEnglish.js";
import { morseCode } from "./fromMorseCode.js";

const form = document.querySelector("#inputField");
const englishFormBtn = document.querySelector("#englishFormBtn");
const result = document.querySelector("#result");
const resultContainer = document.querySelector("#resultContainer");

export function translate(phrase) {
  if (/[^a-zA-z./\s-]/.test(phrase)) {
    let message = "Input contains characters that are not recgonised";
    error(message);
    throw new Error(message);
  } else {
    if (/[a-zA-z]/.test(phrase)) {
      return english(phrase);
    } else {
      return morseCode(phrase);
    }
  }
}

export const error = (message) => {
  result.classList.add("danger");
  result.textContent = message;
  form.value = "";
};

englishFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  result.classList.remove("danger");

  result.textContent = translate(form.value);
  form.value = "";
});
