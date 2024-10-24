let new_h1 = document.createElement('h1')

new_h1.innerText = "Un titre"
new_h1.classList.add('title')


let i = document.createElement("i")

i.innerText = "special"
new_h1.appendChild(i)


let zone1 = document.getElementById("zone1")

zone1.appendChild(new_h1)

let btnCLick = document.getElementById('btnClick')

btnCLick.addEventListener("click",() => {
    console.log("hello");
    new_h1.innerText = "yepee"
})

let btnPLus = document.getElementById("btnPLus")
let btnMinus = document.getElementById("btnMinus")
let counter = document.getElementById("counter")

let index = 0

btnPLus.addEventListener("click",() => {
    index++
    counter.innerText = index
})

btnMinus.addEventListener("click",() => {
    index = index -1
    counter.innerText = index
})

