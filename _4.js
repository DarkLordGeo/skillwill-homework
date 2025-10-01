// დაწერე ფუნქცია, რომელიც მიიღებს სამ
// პარამეტრს (string, valueToReplace,
// valueToReplaceWith), ჩაანაცვლებს
// "valueToReplace"-ს "valueToReplaceWith"
// მნიშვნელობით და დააბრუნებს ახალ stringს
// ● არ გამოიყენო string.replace() ფუნქცია


const customReplace = (string, valueToReplace, valueToReplaceWith) => {
    return valueToReplace && valueToReplaceWith
        ? string.split(valueToReplace.trim())
            .join(valueToReplaceWith.trim())
        : 'Not an enough arguments'
}
console.log(customReplace('i love chocolate ice-cream', 'ice-cream', 'candy'));

// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს string ტიპის მნიშვნელობას
// (წინადადებას), მასში ყოველ სიტყვას
// გადაწერს დიდი ასოთი და დააბრუნებს
// ახალ წინადადებას

const upperCase = (string) => {
    return string
        .split("")
        .map((char) => char.toUpperCase())
        .join("")
}

console.log(upperCase('This text is supposed to be UPPERCASE'));

// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს მომხმარებლების მასივს და
// დააბრუნებს დალაგებულ მასივს
// მომხმარებლების ასაკის ზრდადობის
// მიხედვით
// ● მაგალითად, ჩავთვალოთ, რომ გვაქვს
// [{name: ‘Lasha’, age: 30}, {name: ‘Saba’, age:
// 20}]. ფუნქციამ უნდა დააბრუნოს [{name:
// ‘Saba’, age: 20}, {name: ‘Lasha’, age: 30}]
// ● შეგიძლია გამოიყენო sort() ფუნქცია

const obj = [
    { name: "Lasha", age: 30 },
    { name: "Saba", age: 20 }
]
const objFltr = (obj) => {
    return obj
        .slice()
        .sort((a, b) => a.age - b.age)
}
console.log(objFltr(obj));