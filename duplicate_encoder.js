function duplicateEncode(word) {
    word = word.toLowerCase();
    console.log(word);
    let wordArray = word.split('');
    for (let i = 0; i < wordArray.length; i++) {
        let some = wordArray.indexOf(wordArray[i], i + 1);
        if (some == -1) {
            wordArray[i] = "(";
        } else {
            wordArray[i] = ")";
        }
        if (i == wordArray.length - 1) {
            let arr = word.split('');
            let lastElement = arr.splice(wordArray.length - 1, 1);
            let result = arr.indexOf(lastElement[0]);
            console.log(arr);
            // console.log();
            if (result) {
                wordArray[wordArray.length - 1] = "("
            } else {
                wordArray[wordArray.length - 1] = ")"
            }


        }

    } console.log(wordArray.join(''));
}

duplicateEncode("recede");//")))((()))"