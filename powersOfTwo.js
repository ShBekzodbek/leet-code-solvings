/** @format */

function powersOfTwo(n) {
  if (n == 0) {
    return [1];
  }
  let min = 0;
  let arr = [];
  while (min <= n) {
    arr.push(Math.pow(2, min));
    min++;
  }
  return arr;
}

powersOfTwo(0);
