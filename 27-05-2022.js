// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
let Alphabet = {
    "1": "a",
    "2": "b",
    "3": "c",
    "4": "d",
    "5": "e",
    "6": "f",
    "7": "g",
    "8": "h",
    "9": "i",
    "10": "j",
    "11": "k",
    "12": "l",
    "13": "m",
    "14": "n",
    "15": "o",
    "16": "p",
    "17": "q",
    "18": "r",
    "19": "s",
    "20": "t",
    "21": "u",
    "22": "v",
    "23": "w",
    "24": "x",
    "25": "y",
    "26": "z",
  }
let values = Object.entries(Alphabet)
function alphabetPosition(text) {
  let string = text.toLowerCase().split(""),
      result = string.map(e => {
          for(let i = 0 ; i < values.length; i++){
            if(values[i][1] === e){
              return values[i][0]
            }
          }
  });
    let undifine = result.filter(n => {
     return n !== undefined;
});

  return undifine.join(" ");
}