document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#hide").classList.toggle("hide")
})




const cardDiv = document.createElement('div')
cardDiv.setAttribute("id", "card")

const h2Element = document.createElement("h2")
h2Element.textContent = "Gandalf"

const hrefElement = document.createElement("a")
hrefElement.setAttribute("href", "#")
hrefElement.textContent = "Go to profile"


cardDiv.appendChild(h2Element)
cardDiv.appendChild(hrefElement)

document.body.appendChild(cardDiv)
// const html = `
//     <div id="card">
//         <h2>Gandalf</h2>
//         <a href="#">Go to profile</a>
//     </div>
// `
// document.querySelector("#i").innerHTML = html
const buttons = document.querySelectorAll("button")
buttons.forEach((answer) => {
    answer.addEventListener("click", () => {
        answer.id == "answer_correct" ?
            (
                answer.style.color = 'green',
                document.querySelector("#score").innerHTML++,
                answer.setAttribute("disabled", true))
            : answer.style.color = 'red'
    })
})
