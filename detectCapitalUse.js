/** @format */

var detectCapitalUse = function (word) {
  let capitals = 0;
  let notCapitals = 0;
  let x = 0;
  let a = "a";
  a = a.charCodeAt(0);
  for (let i = 0; i < word.length; i++) {
    x = word.charCodeAt(i);
    if (x < a) {
      capitals++;
    } else {
      notCapitals++;
    }
  }
  if (word.charCodeAt(0) < a && notCapitals == word.length - 1) {
    return true;
  }
  if (notCapitals == word.length) {
    return true;
  }
  if (capitals == word.length) {
    return true;
  }
  return false;
};

let string = "FlaG"

const re = detectCapitalUse(string);

console.log(re);
