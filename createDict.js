/** @format */

function createDict(keys, values) {
  let obj = {};
  let j = 0;
  for (let i of keys) {
    if (values[j] == undefined) {
      values[j] = null;
    }
    obj[i] = values[j];
    j++;
  }
  return obj;
}

const re = createDict(["a", "b", "c", "d"], [1, 2, 3]);
console.log(re);
