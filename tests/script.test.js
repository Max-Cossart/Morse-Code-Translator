import { english } from "../scripts/fromEnglish";
import { morseCode } from "../scripts/fromMorseCode";

describe("English to Morse Code translation", () => {
  describe("Basic operations", () => {
    it("Returns a string", () => {
      expect(typeof english("... --- ...")).toBe("string");
    });
  });

  describe("Make sure characters entered are returned in accurate Morse Code translation", () => {
    it("Returns valid Morse Code character translations", () => {
      expect(english("abcdefghijklm")).toBe(
        ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. --"
      );
    });
    it("Returns valid Morse Code character translations", () => {
      expect(english("nopqrstuvwxyz")).toBe(
        "-. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --.."
      );
    });
  });

  describe("Make sure phrases entered with spaces are returned in accurate Morse Code translations", () => {
    it("Returns valid Morse Code phrases", () => {
      expect(english("Sphinx of black quartz judge my vow")).toBe(
        "... .--. .... .. -. -..- / --- ..-. / -... .-.. .- -.-. -.- / --.- ..- .- .-. - --.. / .--- ..- -.. --. . / -- -.-- / ...- --- .--"
      );
    });
    it("Returns valid Morse Code", () => {
      expect(english("Glib jocks quiz nymph to vex dwarf")).toBe(
        "--. .-.. .. -... / .--- --- -.-. -.- ... / --.- ..- .. --.. / -. -.-- -- .--. .... / - --- / ...- . -..- / -.. .-- .- .-. ..-."
      );
    });
    it("Returns valid Morse Code", () => {
      expect(english("The five boxing wizards jump quickly")).toBe(
        "- .... . / ..-. .. ...- . / -... --- -..- .. -. --. / .-- .. --.. .- .-. -.. ... / .--- ..- -- .--. / --.- ..- .. -.-. -.- .-.. -.--"
      );
    });
  });

  describe("Formats phrase passed in", () => {
    it("Trims excess white space", () => {
      expect(english("   hello   ")).toBe(".... . .-.. .-.. ---");
    });
    it("Trims excess white space", () => {
      expect(english("   hello there   ")).toBe(
        ".... . .-.. .-.. --- / - .... . .-. ."
      );
    });
  });
});

describe("Morse Code to English Translation", () => {
  describe("Basic operations", () => {
    it("Returns a string", () => {
      expect(typeof morseCode("sos")).toBe("string");
    });
  });

  describe("Make sure Morse Code entered is returned in accurate English translation", () => {
    it("Returns valid English character translations", () => {
      expect(
        morseCode(".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. --")
      ).toBe("Abcdefghijklm");
    });
    it("Returns valid English character translations", () => {
      expect(
        morseCode("-. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..")
      ).toBe("Nopqrstuvwxyz");
    });
  });

  describe("Make sure phrases entered with spaces are returned in accurate English translations", () => {
    it("Returns valid English phrases", () => {
      expect(
        morseCode(
          "... .--. .... .. -. -..- / --- ..-. / -... .-.. .- -.-. -.- / --.- ..- .- .-. - --.. / .--- ..- -.. --. . / -- -.-- / ...- --- .--"
        )
      ).toBe("Sphinx of black quartz judge my vow");
    });
    it("Returns valid English", () => {
      expect(
        morseCode(
          "--. .-.. .. -... / .--- --- -.-. -.- ... / --.- ..- .. --.. / -. -.-- -- .--. .... / - --- / ...- . -..- / -.. .-- .- .-. ..-."
        )
      ).toBe("Glib jocks quiz nymph to vex dwarf");
    });
    it("Returns valid English", () => {
      expect(
        morseCode(
          "- .... . / ..-. .. ...- . / -... --- -..- .. -. --. / .-- .. --.. .- .-. -.. ... / .--- ..- -- .--. / --.- ..- .. -.-. -.- .-.. -.--"
        )
      ).toBe("The five boxing wizards jump quickly");
    });
  });

  describe("Formats phrase passed in", () => {
    it("Trims excess white space", () => {
      expect(morseCode("    .... . .-.. .-.. ---      ")).toBe("Hello");
    });
    it("Trims excess white space", () => {
      expect(morseCode("   .... . .-.. .-.. --- / - .... . .-. .   ")).toBe(
        "Hello there"
      );
    });
  });
});
