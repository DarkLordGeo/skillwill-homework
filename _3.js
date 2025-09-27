// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ
// უნდა დააბრუნოს 2 - ელემენტიანი მასივი,
// სადაც პირველი ელემენტია პირველი და
// მეორე პარამეტრის ჯამი, ხოლო მეორე
// ელემენტი - მესამე ელემენტიდან
// დაწყებული ყველა დანარჩენის ნამრავლი



// 1

const func = (...n) => {
    if (n.length <= 2) return 'not an enough numbers'
    let spl = n.slice(2)
    let mult = spl.reduce((accumulator, currentValue) => currentValue * accumulator, 1)
    return [n[0] + n[1], mult]
}
console.log(func(1, 2, 3, 4, 5));

// ● დავუშვათ გვინდა ობიექტიდან წავიკითხოთ
// შემდეგი ველი: user.banks[2].address.city.
// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს cityს. გამოიყენე destructuring-ი. თუ ასეთი
// ველი არ არსებობს უნდა დაბრუნდეს
// undefined

// 2


const user = {
    banks: [
        {
            // address: {
            //     city: 'Tbilisi'
            // }
        },
        {
            // address: {
            //     city: 'Kutaisi'
            // }
        },
        {
            address: {
                city: 'Batumi'
            }
        }
    ]
}
const rObj = (obj) => {
    const { banks } = obj
    if (banks && banks[2] && banks[2].address) {
        const { city } = banks[2].address
        return city
    }
    return undefined

}
console.log(rObj(user));


// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს ნებისმიერ ობიექტს და
// დააბრუნებს იგივე მნიშვნელობების მქონე
// ახალ (განსხვავებულ) ობიექტს
// ● გაითვალისწინე, რომ თუ ობიექტში კიდევ
// სხვა ობიექტებია იმათი ასლებიც უნდა
// შეიქმნას
// ● გამოიყენეთ (...) ოპერატორი


// 3

const test = {
    user: {
        name: "levan",
        bank_name: "bog",
        history: ["bad", "good", "bad"],
        address: {
            city: "Tbilisi",
            district: "gldani"
        },
        loan: {
            amount: ['3000 GEL', '420000 GEL'],
        }
    }
}
const copyObj = (obj) => {
    const sprObj = {
        ...obj,
        user: {
            history: [...obj.user.history],
            address: { ...obj.user.address },
            loans: [...obj.user.loan.amount]
        }
    }
    return sprObj
}
console.log(copyObj(test));