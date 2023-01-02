
function countZeros(num) {
    let count_zero = 0;
    while (num > 0) {
        // console.log(num % 10);
        if (num % 10 == 0) {
            if (num % 100 == 0) {
                count_zero++;
            }
            count_zero++;

        }
        num--;

    }
    console.log(count_zero);

}

countZeros(200)