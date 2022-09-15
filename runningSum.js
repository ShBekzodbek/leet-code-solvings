const runningSum = function(nums) {
    let last = nums[0]
    let res = [last]

    for(let i = 1; i < nums.length; i++) {
        let num = last + nums[i]
        res.push(num)
        last = num
    }

    return res
};
console.log(runningSum([1,2,3,4]))