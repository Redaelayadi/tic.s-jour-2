let h1 = document.createElement("h1")
let div1 = document.getElementById("exo1")

h1.innerText = "J'ai réussi"
div1.appendChild(h1)

let btnMoney = document.getElementById("btnMoney")
let li = document.createElement("li")
let banque = document.getElementById("banque")
li.innerText = "flouz"
btnMoney.addEventListener("click",() => {
    let li = document.createElement("li")
    li.innerText = "flouz"
    banque.append(li)
})

let btnAngry = document.getElementById("btnAngry")
let img = document.getElementsByTagName("img")
let happy = true
console.log(img);


btnAngry.addEventListener("click", () => {
    if (happy == true){
        img[0].src = 'https://i.pinimg.com/736x/b0/f7/f8/b0f7f8165f2dda408cde0730a2f08c23.jpg'
        happy == false
}
    else{
        happy == true
        img[0].src = 'https://as1.ftcdn.net/v2/jpg/02/95/26/46/1000_F_295264675_clwKZxogAhxLS9sD163Tgkz1WMHsq1RJ.jpg'
    }
})

let classe = document.getElementsByClassName("ennonce")
let bouton = document.getElementsByClassName("btnYellow")

bouton[0].addEventListener("click", () => {
    let i = 0
    while (i < classe.length) {
        classe[i].classList.toggle("yellow")
        i++
    }
})

