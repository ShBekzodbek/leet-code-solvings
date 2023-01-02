/** @format */

function basicOp(operation, value1, value2) {
  let result = 0;
  switch (operation) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "*":
      result = value1 * value2;
      break;
    case "/":
      result = value1 / value2;
      break;
    default:
      result = -1;
      break;
  }
  return result;
}
let re = basicOp('+',1,3);
console.log(re);
