const form = document.querySelector("form")
const input = document.querySelector("input")
const select = document.querySelector("select")
const description = document.getElementById("description")
const result = document.getElementById("result")
const footer = document.querySelector("footer")

// USD
// EUR
// GBP
// DOlar 5,61
// Euro 6,20
// Libra esterlina 7,37
const hasCharacterRegex = /\D+/g

input.addEventListener("input", (event) => {
    event.preventDefault()
    
    // Se possuir letras o input tera o valor de = ""
    input.value = input.value.replace(hasCharacterRegex, "")

    // console.log(input.value)
})


form.onsubmit = (event) => {
    event.preventDefault()

    switch(select.value) {
        case "USD":
            let conversaoUSD = input.value * 5.61
            description.innerText = "US$ 1 = R$ 5,61"
            result.innerText = conversaoUSD.toFixed(2).replace(hasCharacterRegex, ",")+" Reais"

            footer.style.display = "block"

            break;
        case "EUR":
            let conversaoEUR = input.value * 6.20

            description.innerText = "EUR$ 1 = R$ 6,20"
            result.innerText = conversaoEUR.toFixed(2).replace(hasCharacterRegex, ",")+" Reais"

            footer.style.display = "block"
            break;
        case "GBP":
            let conversaoGBP = input.value * 7.37

            description.innerText = "GBP$ 1 = R$ 7,37"
            result.innerText = conversaoGBP.toFixed(2).replace(hasCharacterRegex, ",")+" Reais"

            footer.style.display = "block"
            break;
    }
}
