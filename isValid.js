function isValid(x){
    let count = 0;
    const newArr=x.toString().split('');
    for(let key in newArr){
        if(newArr.charCodeAt(key) === 40  && newArr.charCodeAt(key+1)===41){
         count++;}
        // }else if (newArr[key]==='[' && newArr[key+1]===']'){
        //     count++;
        // }else  if(newArr[key]==='{' && newArr[key+1] === '}'){
        //     count++;
        // }
    
    return count;
}
}
const valid = isValid('[]{]');
console.log(valid);