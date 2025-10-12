// ● setTimeout ფუნქცია იყენებს callback-ს,
// დაწერეთ მისი promise-ზე დადაფუძნებული
// ალტერნატივა


// ● (მაგ: mySetTimeout(delay).then(...)

function mySetTimeout(delay, func) {
    return new Promise(resolve => setTimeout(() => resolve(func), delay))
}


// ● გამოიყენე პირველ დავალებაში შექმნილი
// ფუნქცია, რათა განავრცო ჩვენს მიერ
// დაწერილი “Toy Shop” შემდეგი პირობის
// იმპლემენტაციით:

// ➔ სათამაშოს დამზადებას სჭირდება
// დაახლოებით 3 წამი. (დროის მითითება
// შესაძლებელი უნდა იყოს დინამიურად)

// ➔ დავამატოთ კიდევ ერთი ნაბიჯი, რომელსაც
// დავარქმევთ პირობითად, “deliverToys”,
// რომლის დაყოვნებაც 2 წამია
// (გადაეცემა დინამიურად)



async function makeToys() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.1) {
            resolve('Undefected')
        } else {
            reject('Defected')
        }
    })
}

async function sellToys(status) {
    return new Promise((resolve, reject) => {
        if (status === 'Undefected') {
            if (Math.random() > 0.7) {
                resolve('Toy was sold')
            } else {
                reject('Toy was unsuccessful')
            }
        }
    })
}

async function deliverToys(status) {
    return new Promise((resolve, reject) => {
        if (status === 'Toy was sold') {
            resolve('Toy will be delivered')
        } else {
            reject('Toy will not be delivered')
        }
    })
}


// ➔ სათამაშოს გაყიდვას სჭირდება 1 წამი
// (დინამიურად)
// ● ყოველი მომდევნო ნაბიჯი უნდა
// ელოდებოდეს წინა ნაბიჯის რეზულტატს და
// შესაბამისად წყვეტდეს მოხდება თუ არა
// მისი შესრულება
// ● გამოიყენე .then().catch() და async/await
// ● სინტაქსები. (2 ვარიანტი)

// 1 variant

// mySetTimeout(100, makeToys()
//     .then((res) => (mySetTimeout(100, sellToys(res)
//         .then((res) => (mySetTimeout(100, deliverToys(res)
//             .then((res) => console.log(res))
//             .catch(err => console.log(err))
//         )), console.log(res))
//         .catch(err => console.log(err))
//     )))
//     .catch(err => console.log(err))
// )

// 2 variant

// async function callFuncs() {
//     try {
//         const status = await mySetTimeout(100, await makeToys())
//         console.log(status);
//         const result = await mySetTimeout(100, await sellToys(status))
//         console.log(result);
//         const final = await mySetTimeout(100, await deliverToys(result))
//         console.log(final)
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// callFuncs()