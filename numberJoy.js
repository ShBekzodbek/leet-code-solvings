function numberJoy(n) {
    const first = n.toString().split('').map((e) => { return Number(e) }).reduce((acc, cur) => acc += cur);
    const second = first.toString().split('').reverse().map(e => { return Number(e); }).join('');
    return (first * second == n) ? true : false

}







const result = numberJoy(123446);
console.log(result);