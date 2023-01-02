function consonantCount(str) {
    let counter=0;
    const arr = str.toLowerCase().split('');
   
    for(let i in arr){
      if(/[a-z]/.test(arr[i])&& !/[aeiou]/.test(arr[i])){
      counter++;
      }
    }
   return counter;
  }

  consonantCount('aaaabkjhhJ **H');