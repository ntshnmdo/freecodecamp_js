// let firstCard = 5
// let secondCard = 7

// let sum = firstCard + secondCard + 9
// let hasBlackJack = false
// let isAlive = true
// // console.log(sum)
// let message = ""

// if (sum < 21) {
//     message = "Do you want to draw a new card?🙂"
// } else if (sum === 21) {
//     message = "Wohoo! You've got Blackjack!🥳"
//     hasBlackJack = true
// } else {
//     message = "You're out of the game!😭"
//     isAlive = false
// }

// // cash out
// console.log(message)

// // console.log(isAlive)

// // Practice 4
// // let age = 20

// // if (age<=20) {
// //     console.log("You cannot enter the club!")
// // } else {
// //     console.log("Welcome!")
// // }

// // Practice 5
// // let age = 101

// // if (age<100) {
// //     console.log("Not eligible")
// // } else if (age===100) { // === exactly/ strictly equal to number datatype but if we use == that means string or number both are correct 
// //     console.log("here is your birthday card from the king!")
// // } else {
// //     console.log("Not eligible, you have already gotten one")
// // }

// // Objects - store data in-depth - composite/ complex data type 
// // key value pairs

// let course = {
//     title: "learn CSS grid for free",
//     lessons: 16,
//     creator: "per harald borgon",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]

// }

// console.log(course["length"]) // console is a object datatype

let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

/* 
arrays
objects
booleans
if else statements
comparison operators
logical operators
for loops
Math floor
Math random
return statements 
*/