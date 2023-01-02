function highAndLow(numbers) {
    let arr = numbers.split(" ");
    for (let i in arr) {
        arr[i] = Number(arr[i]);
    }
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return `${max} ${min}`;


}
// another ways 
// const highAndLow = numbers => `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`;
//it is mostly similar my code but I thought I needed to change from string to number

let result = highAndLow("-1 1 4 5 6 43");
console.log(result);