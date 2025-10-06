// 1
function toggleModal() {
    const modalContainer = document.querySelector("#modalContainer")
    modalContainer.classList.toggle('hidden')
}

// 2
const change_bg = document.querySelector("#change_bg")
change_bg.addEventListener("click", () => {
    const color_input = document.querySelector("#color_input").value.toLowerCase()

    Array('red', 'blue', 'green', 'black', 'white').includes(color_input) ?
        document.body.style.backgroundColor = color_input
        : (alert("Wrong color bud! "), document.body.style.backgroundColor = "")
})

// 3
const calc_average = document.querySelector('#calc_average');
const result = document.querySelector("#result")

calc_average.addEventListener("click", () => {
    const average = document.querySelector("#average").value.split(":")

    average.length !== 0 
        ? result.innerHTML = (
            average.map(Number).reduce((a, b) => a + b, 0) / average.length
        ).toFixed(2)
        : result.innerHTML = 0
})

