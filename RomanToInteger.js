function romanToInt(s) {
    let result = 0;
    const arr = s.split('');
    const Roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'I' && arr[i + 1] === 'V') result += 4;
        if (arr[i] === 'I' && arr[i + 1] === 'X') result += 9;
        else {
            if (arr[i] === 'I') result += Roman.I;
            if (arr[i] === 'V') result += Roman.V;
            if (arr[i] === 'X') result += Roman.X;
            if (arr[i] === 'L') result += Roman.L;
            if (arr[i] === 'C') result += Roman.C;
            if (arr[i] === 'D') result += Roman.D;
            if (arr[i] === 'M') result += Roman.M;
        }
    }
    return result;
}

console.log(romanToInt('IX'));