let firstCard = 5
let secondCard = 7

let sum = firstCard + secondCard + 9
let hasBlackJack = false
let isAlive = true
// console.log(sum)
let message = ""

if (sum < 21) {
    message = "Do you want to draw a new card?🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game!😭"
    isAlive = false
}

// cash out
console.log(message)

// console.log(isAlive)

// Practice 4
// let age = 20

// if (age<=20) {
//     console.log("You cannot enter the club!")
// } else {
//     console.log("Welcome!")
// }

// Practice 5
// let age = 101

// if (age<100) {
//     console.log("Not eligible")
// } else if (age===100) { // === exactly/ strictly equal to number datatype but if we use == that means string or number both are correct 
//     console.log("here is your birthday card from the king!")
// } else {
//     console.log("Not eligible, you have already gotten one")
// }

