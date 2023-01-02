var missingNumber = function (nums) {
    nums.sort((a, b) => a - b);
    let lastNum = nums[nums.length - 1];
    for (let i = 0; i < lastNum; i++) {
        if (nums[i] != i) {
            console.log(i);
        }
    }

};
let nums = [0,1]
missingNumber(nums)