var removeElement = function(nums, val) {
    let stringArr = [];
    let numberArr=[];
    let arr = nums
    .map((e)=> e==val?"_":e)
    for(let i in arr){
     if(typeof arr[i] =="string"){
        stringArr.push(arr[i]);
     }else{
      numberArr.push(arr[i]);
     }
    }
  console.log(numberArr.concat(stringArr));
  };
  
  removeElement([3,2,2,3],3);
  
  // I really liked this solution because I solved this way before then compiler didn't accept it 
  
  var removeElement = function(nums, val) {
    // create array with content of nums but without val items
    let arr = nums.filter(num => num !== val);
    // set nums length to zero
    nums.length = 0;
    // push content of arr to num
    nums.push(...arr);
    //return length of nums
    return nums.length;
};