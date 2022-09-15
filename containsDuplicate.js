

function containsDuplicate(arr){
    for (let i=arr.length-1; i>=0; i--){
       let a=arr[i];

       if (arr.includes(a)) return true;
    }
    return false;



    
}
const isArray = [1,2,3,2,4,5,6];



console.log( containsDuplicate(isArray));