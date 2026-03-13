const text = [
"MBA Student",
"Business Analytics Enthusiast",
"Automation Builder"
]

let count = 0
let index = 0
let currentText = ""
let letter = ""

function type(){

if(count === text.length){
count = 0
}

currentText = text[count]

letter = currentText.slice(0, ++index)

document.querySelector(".typing").textContent = letter

if(letter.length === currentText.length){
count++
index = 0
}

setTimeout(type,120)

}

type()

const form = document.getElementById("contact-form")
const status = document.getElementById("form-status")

async function handleSubmit(event) {
event.preventDefault()

const data = new FormData(event.target)

fetch(event.target.action, {
method: form.method,
body: data,
headers: {
'Accept': 'application/json'
}
}).then(response => {
if (response.ok) {
status.innerHTML = "Message sent successfully 👍"
form.reset()
} else {
status.innerHTML = "Something went wrong. Please try again."
}
}).catch(error => {
status.innerHTML = "Network error. Try again later."
})
}

form.addEventListener("submit", handleSubmit)
