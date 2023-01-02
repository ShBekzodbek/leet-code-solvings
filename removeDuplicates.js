var removeDuplicates = function(nums) {
let arr =[];
    for(let i=0 ; i<nums.length ; i++){
     let removed = nums.splice(i,1)
      console.log(nums.indexOf(removed));
    }
  
};

let nums = [0,0,1,1,1,2,2,3,3,4];

removeDuplicates(nums)