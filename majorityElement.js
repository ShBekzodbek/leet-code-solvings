// /** @format */

var majorityElement = function (nums) {
  if (nums.length == 1) {
    return nums[0];
  }
  let counter = {};
  let arr = [];
  for (let i in nums) {
    if (i != 0) {
      counter[nums[i]] = 0;
    }
  }
  for (let key in nums) {
    if (counter.hasOwnProperty(nums[key])) {
      counter[nums[key]]++;
    }
  }

  let max = 0;
  for (let key in counter) {
    key = Number(key);
    arr.push(counter[key]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  // console.log(max);
  for (let i in counter) {
    if (counter[i] == max) {
      return i;

    }
  }

};
function majorityElement(nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  return nums[Math.floor(nums.length / 2)];
}

let nums = [3, 2, 3];
const re = majorityElement(nums);

console.log(re);
