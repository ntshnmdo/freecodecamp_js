// let bonusPoints = 50
// bonusPoints+=50
// bonusPoints-=75
// bonusPoints+=45
// console.log(bonusPoints)

// function myLogger() {
//     console.log(42)
// }

// myLogger()

// let l1=5
// let l2=5
// let l3=5
// function Sum() {
//     let total = l1+l2+l3
//     console.log(total)
// }

// Sum()

// let lapsCompleted = 0

// function incLaps() {
//     lapsCompleted+=1
//     lapsCompleted*=3
//     console.log(lapsCompleted)
// }
// incLaps()

// let count = 0

// function increment() {
//     count+=1
//     console.log(count)
// }

// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count+=1
//     countEl.innerText=count
// }

// function save() {
//     console.log(count)
// }

// strings are datatypes "nitish"
// numbers are datatypes 56

// let name = "nitish"
// let greetings = "Hi, my name is "

// let mygreet = greetings + name
// console.log(mygreet)


// grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById("welcome-el")

// create two variables (name and greetings) that contains your name
// and the greeting we want to render on the page

// let name = "Per Harald Borgen"
// let greeting = "Welcome back "

// render the welcome message using welcomeEL.innertext
// welcomeEl.innerText = greeting+name

// welcomeEl.innerText+="emoji"
/*
Recap
- Script Tag
- variables
- numbers
- strings
- console.log()
- functions
- the DOM
- getElementById()
- innerText
- textContent
*/


let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count+=1
    countEl.textContent=count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

console.log("Let's count people on the subway!")