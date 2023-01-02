
function diffBig2(arr) {
   return arr.splice(arr.indexOf(Math.max(...arr)), 1) - Math.max(...arr);
}
let result = diffBig2([10, 5, 2]);
console.log(result);