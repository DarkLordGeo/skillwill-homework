// 1.
const func = (a, b) => {
    return a === b ? true : false
}
console.log(func(1, 1))
// 2.
const to = (fa) => {
    return typeof (fa) === 'number' ? Math.floor((fa - 32) * 5 / 9) : false
}
console.log(to(59))
// 3.
const calc = (a, b, op) => {
    if (typeof (a) !== 'number' || typeof (b) !== 'number') return false
    switch (op) {
        case '+': return a + b
        case '-': return a - b
        case '/': return a / b
        case '*': return a * b
        default: return false
    }
}
console.log(calc(6, 2, '+'));
