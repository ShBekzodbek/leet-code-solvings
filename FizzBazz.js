function FizzBazz(n) {
    const tuplam = [];
    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            tuplam[i] = "FizzBazz";
        } else if (i % 3 === 0) {
            tuplam[i] = "Fizz";
        } else if (i % 5 === 0) {
            tuplam[i] = "Bazz";
        } else {
            tuplam[i] = i;
        }

    }
    return tuplam.slice(1);
}

const newTuplam = FizzBazz(15);
console.log(newTuplam);
