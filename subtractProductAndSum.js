function subtractProductAndSum(n) {
    let multiple = 1;
    let sum = 0;
    while (n != 0) {
        multiple *= n % 10;
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return multiple - sum;

};

console.log(subtractProductAndSum(234))

