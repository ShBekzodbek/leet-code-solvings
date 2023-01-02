function isIsogram(str){
    str = str.toLowerCase().split('');
    for(let i in str){
        for(let j in str){
            if(str[i]==str[j] && i!=j){
                return false
            }
        }
    }
    return true;
  }
  //I liked it 
//   function isIsogram(word){
//     word = word.toLowerCase().split("").sort();
//     for (var i=0;i<word.length-1;i++){
//       if (word[i]==word[i+1]) return false;
//       }
//     return true;
//   }

  let result = isIsogram('isIsogram');
  console.log(result);