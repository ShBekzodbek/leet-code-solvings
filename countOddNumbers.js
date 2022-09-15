function countOddNumbers(low, high) {
    var result = 0;
    for (var i = low; i <= high; i++) {
        if (i % 2 != 0) result++;
    }
    return result;

}

console.log(countOddNumbers(3, 7));

