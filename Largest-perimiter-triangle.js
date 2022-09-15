function largestPerimiterTriangle(nums) {


    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        result += nums[i];

    }
   for(let i = 0; i < nums.length; i++) {
       let sum=result-nums[i];
       if(nums[i] >=sum){
          return 0;
       }
   }
   return result;


}


console.log(largestPerimiterTriangle([1, 2, 1]));