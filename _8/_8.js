

// დაწერე ფუნქცია expo, რომელიც იქნება
// რეკურსიული ფუნქცია და მიიღებს
// არგუმენტად:
// ● ა) ციფრს ბ) ხარისხს და გ) callback - ს და
// დააბრუნებს მიღებული ციფრის ხარისხს
// მაგალითად: 5 ხარისხად 3 - არის 125 (5 * 5 *5)


// 1.
// not recursive at all
function expo(num, power, cb) {
    let result = num ** power
    return cb(result, num, power)
}
console.log(expo(2, 3, (cb, num, power) => `${cb} is (${String(num).repeat(power).split("").join(" * ")})`))



// ● fetch ფუნქციის გამოყენებით წამოიღე
// მონაცემები მოცემული მისამართიდან და
// გამოიტანე DOM-ში პოსტის სახით

// 2.

// function createPost(usrId, uniqueIdentificator, header, content) {
//     const parent = document.createElement('div')
//     const userId = document.createElement('div')
//     const id = document.createElement('a')
//     const title = document.createElement('h3')
//     const body = document.createElement('p')

//     userId.textContent = usrId
//     id.textContent = uniqueIdentificator
//     title.textContent = header
//     body.textContent = content
//     parent.append(userId, title, id, body)
//     document.body.append(parent)
// }


// async function fetchData() {
//     try {
//         const data = await fetch('https://jsonplaceholder.typicode.com/posts')

//         const response = await data.json()

//         console.log(response.map((item) => item.id))
//         console.log(response)
//         response.forEach(element => {
//             createPost(element.id, element.userId, element.title, element.body)
//         });

//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchData()


// ● დაწერე ასინქრონული ფუნქცია, რომელიც
// არგუმენტად იღებს ობიექტს და აკეთებს
// deep copy-ს
// ● ფუნქციამ უნდა გამოიძახოს reject თუ
// არგუმენტი არ არის ობიექტი. თუ
// ყველაფერი კარგად არის, გამოიძახოს
// resolve კოპირებული ობიექტით


// 3.


async function deepCopyTest(obj) {
    return new Promise((resolve, reject) => {
        if (obj !== null && typeof obj === 'object' && !Array.isArray(obj)) {
            resolve(JSON.parse(JSON.stringify(obj)))
        } else {
            reject('Object is not object')
        }
    })
}
deepCopyTest({ "a": 1, "b": { "a": 1, "c": { "d": 2 } } })
    .then((res) => console.log(res))
    .catch(err => console.log(err))
