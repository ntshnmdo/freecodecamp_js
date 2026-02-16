// //Q1 - create two variables first name and last name
// let firstName = "Nitish"
// let lastName = "Namdeo"

// // concatenate the two variables into a third vairable call fullName
// let fullName = firstName + " " + lastName

// // log fullName to the console
// console.log(fullName)

// // Q2 - create a function that logs out "Hi there, Linda!" when called
// let name = "Linda"
// let greeting = "Hi there"

// function greet() {
//     console.log(greeting + "," + " " + name + "!")
// }
// greet()

// // Q3 - Incrementing and Decrementing

// let myPoints = 3

// // create two functions, add3Points() and remove1Point(), and have them
// // add/ remove points to/ from the myPoints variable

// function add3Points() {
//     myPoints+=3
// }

// function remove1Point() {
//     myPoints-=1
// }
// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// console.log(myPoints)

// // Q4 - strings and numbers

// // try to predict what each of the lines will log out to

// console.log("2" + 2) // "22" str
// console.log(11 + 7) // 18 int
// console.log(6 + "5") // "65" str
// console.log("My Points: " + 5 + 9) // "My Points: 14 str"
// console.log(2 + 2) // 4 int
// console.log("11" + "14") // "1114" str

// Q5 - rendering an error

let errorParagraph = document.getElementById("error")
console.log(errorParagraph)
function purchase() {
    console.log("button clicked")
    errorParagraph.textContent = "Something went wrong, please try again!"
}