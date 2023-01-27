let adviceNumber = document.getElementById("title");
let adviceQuote = document.getElementById("quote");
let adviceButton = document.getElementById("diceButton");
let diceImage = document.getElementById("dice");

const shakeDice = () => {
    diceImage.classList.toggle("shake")
}

async function getAdvice() {
    try {
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json()
        adviceNumber.innerText = 'Advice #' + data.slip.id
        adviceQuote.innerText = '"' + data.slip.advice + '"'
    } catch (err) {
        console.error(err);
    }
}

adviceButton.addEventListener("click", getAdvice)
adviceButton.addEventListener("click", shakeDice)
adviceButton.addEventListener("animationend", shakeDice)
getAdvice()
shakeDice()