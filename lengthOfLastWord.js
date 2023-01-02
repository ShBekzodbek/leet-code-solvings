/** @format */

var lengthOfLastWord = function (s) {
  let indexOfWhiteSpace = s.trim().lastIndexOf(" ");
  if (indexOfWhiteSpace < 0) {
    return s.trim().length;
  }
  if (s.slice(indexOfWhiteSpace + 1).lastIndexOf(" ")) {
    let indexOfWhiteSpace1 = s
      .slice(indexOfWhiteSpace + 1)
      .trim()
      .lastIndexOf(" ");
    return s
      .slice(indexOfWhiteSpace + 1)
      .slice(indexOfWhiteSpace1 + 1)
      .trim().length;
  }
  return s.slice(indexOfWhiteSpace + 1).trim().length;
};

let s = "luffy is still joyboy";
// " vboImaga";
let re = lengthOfLastWord(s);

console.log(re);
