let myLeads = []
const inputEl = document.getElementById("input-el") // const and let are same but diff is const cannot be reassigned afterwards, it is fixed
const inputBtn = document.getElementById("input-btn") 
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// const tabs = [
//     {url: "https://www.linkedin.com/in/nitish-namdeo/"}
// ]

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem( "myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
    
})

function render(leads) {
    let  listItems = ""
    for (let i=0; i<leads.length;i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" 
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
        listItems += `
            <li>
                <a target = '_blank' href = '${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}



deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function(){         // same as onclick but it is only done in js not in html and we dont to create function above
    // myLeads.push("www.awesomelead.com") // hard coded
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})


// render the listitems inside the unordered list using ulEl.innerHTML
/*when to say const and let-
if possible, use const. if not, use let.

const playerName = "per"
let credits = 45

credits = credits - 10
*/

// // Template strings/ literals
// const recipient = "James"
// // create new variable, sender and set its value to your name
// const sender = "Per Harald Borgen"
// // use your sender variable instead of "Per"
// const email = `Hey ${recipient}! How is it going? Cheers ${sender}`

// console.log(email)

// localStorage.setItem("myLeads","dsafwjh423")
// localStorage.getItem("myLeads")
// localStorage.clear("myLeads")
// we need to store strings in arrays

/* 
const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name) {   // parameters -> define, inside the code
    welcomeEl.textContent = `${greeting}, ${name}`
}

greetUser("Hi", "Nitish") // arguments -> calling, outside the function# take your argument outside (hint)           
*/

/* truthy and falsy value
const credits = 0

if (credits>0) {
    console.log("lets play")
    }

 falsy values
 - false
 - 0
 - ""
 - Null -> how you as a developer signalize emptiness
 - undefined -> how Js signalizes emptiness
 - NaN
 */

/**
 * Recap
 * const
 * addEventListener()
 * innerHTML
 * input.value
 * functions parameters
 * template stings html
 * local storage -> db
 * json parse & stringify
 * objects in arrays
 */