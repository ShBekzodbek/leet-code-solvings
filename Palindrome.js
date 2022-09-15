function isPalindrome(x){
    let count =0;
    const arr = x.toString().split('');
    const reverseArr = [...arr];
    reverseArr.reverse();
    for (const iterator in arr) {
        if(arr[iterator]===reverseArr[iterator]){
            count++;
        }
    }
    if(count===arr.length){
         return true;
     }else{
         return false;
     }
    
}
const newArr = isPalindrome(-121);
console.log(newArr);
