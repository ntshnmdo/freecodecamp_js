// Q1 - objects

// let person = {
//     name: "Shubham",
//     age: 25,
//     country: "India"
// }

// function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }


// logData()

// Q2 - if else statements

// let age = 88

// if (age<6) {
//     console.log("free pass")
// } else if (age<18) {
//     console.log("child discount")
// } else if (age<27) {
//     console.log("student Discount")
// } else if (age<67) {
//     console.log("full price")
// } else {
//     console.log("senior citizen discount")
// }

// Q3 - loops and arrays

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

// console.log("The 5 largest countries in the world: ")

// for (let i=0; i<largeCountries.length; i+=1) {
//     console.log("- " + largeCountries[i])
// }

// Q4 - pop push shift unshift

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)

// Q5 - logical operators

// let dayOfMonth = 14
// let weekDay = "Friday"

// if (dayOfMonth === 13 && weekDay === "Friday") {
//     console.log(")O(")
// } else (":)")

// Q6 - Rock Paper Scissor

// let hands = ["rock", "paper", "scissor"]

// function getHand() {
//     let randomIndex = Math.floor(Math.random() * 3)
//     return hands[randomIndex]
// }

// console.log(getHand())

//Q7 - sorting fruits\

let fruit = ["apple ","orange ","apple ","apple ","orange "]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruit() {
    for (let i = 0; i<fruit.length; i++) {
        if (fruit[i] === "apple ") {
            appleShelf.textContent += "apple "
        } else if (fruit[i] === "orange ") {
            orangeShelf.textContent += "orange "
        }    
    }
}

sortFruit()