let myLeads = []
const inputEl = document.getElementById("input-el") // const and let are same but diff is const cannot be reassigned afterwards, it is fixed
const inputBtn = document.getElementById("input-btn") 
const ulEl = document.getElementById("ul-el")

// localStorage.setItem("myLeads","dsafwjh423")
// localStorage.getItem("myLeads")
// localStorage.clear("myLeads")

inputBtn.addEventListener("click", function(){         // same as onclick but it is only done in js not in html and we dont to create function above
    // myLeads.push("www.awesomelead.com") // hard coded
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})


function renderLeads() {
    let  listItems = ""
    for (let i=0; i<myLeads.length;i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" 
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
        listItems += `
            <li>
                <a target = '_blank' href = '${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

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