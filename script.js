let firstCard = 0
let secondCard = 0
let cardSum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
const playBtn = document.getElementById("play-btn")
const drawBtn = document.getElementById("draw-card-btn")
const replayBtn = document.getElementById("replay-btn")
const cardList = document.getElementById("card-list")
const sumVal = document.getElementById("sum-val")
const msgEl = document.getElementById("msg-el")

playBtn.addEventListener("click", initiateCard)
drawBtn.addEventListener("click", drawCard)
replayBtn.addEventListener("click", replay)

function initiateCard() {
    playBtn.disabled = true

    firstCard = randomCard()
    secondCard = randomCard()

    const card1 = document.createElement("li")
    const card2 = document.createElement("li")
    card1.textContent = firstCard
    card2.textContent = secondCard

    cardList.appendChild(card1)
    cardList.appendChild(card2)

    showSum(firstCard, secondCard)

    checkResult()
    // showPopup(message)
}

function checkResult() {
    if (cardSum <= 20) {
        drawBtn.disabled = false
        message = "Do you want to draw a new card? 🙁"
    } else if (cardSum === 21) {
        playBtn.style.display = "none"
        drawBtn.style.display = "none"
        replayBtn.style.display = "inline-block"
        message = "Woohoo! You've got Blackjack! 🤑"
        hasBlackJack = true
    } else {
        drawBtn.disabled = true
        message = "You're out of the game!😭"
        showPopup("Close the popup to play again!")
        isAlive = false
    }

    msgEl.textContent = message
}

function drawCard() {
    let newCard = document.createElement("li")
    let randomNum = randomCard()
    newCard.textContent = randomNum
    cardList.appendChild(newCard)
    showSum(cardSum, randomNum)
    checkResult()
}

function replay() {
    playBtn.style.display = "inline-block"
    enablePlayButton()
    drawBtn.disabled = true
    drawBtn.style.display = "inline-block"
    replayBtn.style.display = "none"
    cardList.innerHTML = ""
    msgEl.textContent = "Want to play a round?"
    showSum(0, 0)
}

function showSum(num1, num2) {
    cardSum = num1 + num2
    sumVal.textContent = cardSum
}
function enablePlayButton() {
    playBtn.disabled = false
}

function randomCard() {
    return Math.floor(Math.random() * (11 - 1) + 1)
}

function showPopup(message) {
    const popup = document.getElementById("popup")
    const popupMessage = document.getElementById("popup-message")

    popupMessage.textContent = message
    popup.style.display = "block"
}

function closePopup() {
    const popup = document.getElementById("popup")
    popup.style.display = "none"
    replay()
}
