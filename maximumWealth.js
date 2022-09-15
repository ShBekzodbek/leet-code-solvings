function maximumWealth(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let key in arr[i]) {
        let sum =+ arr[i][key];
        newArr[i]=sum;
        console.log(sum);
        }
        return newArr;

    }
}


const accounts = [[1, 5], [7, 3], [3, 5]]

console.log(maximumWealth(accounts));