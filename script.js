const morseCodeObj = {
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
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": "  /  ",
};

const englishForm = document.querySelector("#englishForm");
const morseCodeForm = document.querySelector("#morseCodeForm");
const result = document.querySelector("#result");

const englishFormBtn = document.querySelector("#englishFormBtn");
const morseCodeFormBtn = document.querySelector("#morseCodeFormBtn");

function englishToMorseCode(phrase) {
  let morseCoded = phrase
    .trim()
    .split("")
    .map((letter) => letter.toUpperCase())
    .map((letter) => morseCodeObj[letter]);

  let translated = morseCoded.join(" ");

  return translated;
}

function morseCodeToEnglish(phrase) {
  let splitPhrase = phrase.split(" ");
  Object.keys(morseCodeObj).forEach((key) => {
    console.log(key);
  });
}

englishFormBtn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(englishToMorseCode(englishForm.value));

  result.textContent = englishToMorseCode(englishForm.value);
  englishForm.value = "";
});

morseCodeFormBtn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(morseCodeToEnglish(morseCodeForm.value));
});
