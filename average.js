function average(salary) {
    let result = 0;
    let count=0;
    const Max = Math.max(...salary);
    const Min = Math.min(...salary);
    for (let i in salary) {
        if (salary[i] !== Max && salary[i] !== Min) {
        result += salary[i];
        count++;
        }
    }
    return result/count;
}

console.log(average([ 1000, 2000,3000,4000]))