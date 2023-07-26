let firstTime = true
let pre

document.getElementById('animal').addEventListener('click', (e) => {
    localStorage.setItem("model", "animal");
    document.getElementById('animal').classList.add("choosen")
    if(firstTime) {
        firstTime = false
        pre = document.getElementById('animal')
    }
    else if(document.getElementById('animal') !== pre) {
        pre.classList.remove("choosen")
        pre = document.getElementById('animal')
    }
})

document.getElementById('flower').addEventListener('click', (e) => {
    localStorage.setItem("model", "flower");
    document.getElementById('flower').classList.add("choosen")
    if(firstTime) {
        firstTime = false
        pre = document.getElementById('flower')
    }
    else if(document.getElementById('flower') !== pre) {
        pre.classList.remove("choosen")
        pre = document.getElementById('flower')
    }
})
document.getElementById('vegetable').addEventListener('click', (e) => {
    localStorage.setItem("model", "vegetable");
    document.getElementById('vegetable').classList.add("choosen")
    if(firstTime) {
        firstTime = false
        pre = document.getElementById('vegetable')
    }
    else if(document.getElementById('vegetable') !== pre) {
        pre.classList.remove("choosen")
        pre = document.getElementById('vegetable')
    }
})

document.getElementById('pizzanot').addEventListener('click', (e) => {
    localStorage.setItem("model", "pizzanot");
    document.getElementById('pizzanot').classList.add("choosen")
    if(firstTime) {
        firstTime = false
        pre = document.getElementById('pizzanot')
    }
    else if(document.getElementById('pizzanot') !== pre) {
        pre.classList.remove("choosen")
        pre = document.getElementById('pizzanot')
    }
})