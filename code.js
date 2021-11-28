let div = document.querySelector("div")
document.querySelector("button").addEventListener("click",colorchange)
document.querySelector("button").addEventListener("click",bodychange)
document.querySelector("button").addEventListener("click",check)
function colorchange(){
    div.classList.toggle("class")
}

let body = document.querySelector("body")
let input = document.querySelector("input")

function bodychange(){
    body.style.backgroundColor= input.value
}


let list=document.querySelectorAll("li")
function check(){
    for (const i of list) {
        if(list.includes("important")){
            i.classList.add("important")
        }
    }
}