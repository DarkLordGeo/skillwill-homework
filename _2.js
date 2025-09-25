// მოცემულია მასივი [{name: 'Temo', age: 25},
// {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]
// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user - ების მასივს და დააბრუნებს
// ყველაზე პატარა ასაკის მქონე ადამიანის
// სახელს

// 1
const arr = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
]
function fltr(arg) {
    return arg.length > 0 ? Math.min(...arr.map((item) => item.age)) : 'Missing argument.'
}
console.log(fltr(arr));

// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს
// იგივე მნიშვნელობების მქონე ახალ
// (განსხვავებულ) ობიექტს

// 2
const user = {
    a: 1,
    b: 2,
}
function copyObj(arg) {
    let cloneObj = { ...arg }
    return cloneObj
}
const res = copyObj(user)
user.a = 2
console.log(user);
console.log(res);



// დაწერე პროგრამა, სადაც ორი a და b
// მომხმარებლები აგორებენ კამათელს
// მანამ, სანამ არ გაგორდება, რომელიც
// უფრო ნაკლებ ცდაში გააგორებს სამიანს ის
// არის გამარჯვებული
// const sum = 3


// 3
let tries = 0
let winner = false
let tie = false
const randomRoll = () => {
    return {
        a: (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1),
        b: (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)
    }
}
const competition = () => {
    if (winner) return true
    const { a, b } = randomRoll()
    tries++
    console.log(`A user: ${a}, B user: ${b}`);
    if (a === 3 && b === 3) {
        console.log('tie');
        tie = true
    }
    else if (a === 3) {
        console.log(`A won with ${tries} tries`)
        winner = true
    }
    else if (b === 3) {
        console.log(`B won with ${tries} tries`)
        winner = true
    }
    return winner
}
let timer = setInterval(() => { if (competition()) clearInterval(timer) }, 10)
console.log(competition())
