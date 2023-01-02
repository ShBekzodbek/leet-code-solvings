/** @format */

function reverseLetter(str) {
  return str
    .replace(/[^a-z]+/gi, "")
    .split("")
    .reverse()
    .join("");
}
let str = "krishan";
let re = reverseLetter(str);
console.log(re);
