// <!-- 1. selectionne le h1 avec l'id titre et afficher son contenu -->
// <!-- 2. selectionne tout les li est affiche les un par un -->
// <!-- 3. selectionne le carré rouge et ajoute lui le mot "carre" dans sont innerText   -->
// <!-- selectionne le hr ayant la class bar et ajoute lui la classe big -->

let h1 = document.getElementById("titre")
console.log(h1.innerText);

let li = document.getElementsByTagName("li")
let i = 0
while (i< li.length) {
    console.log(li[i]);
    i++   
}

let carre = document.getElementById("carre")
carre.innerText = "Carre"

let hr = document.getElementsByClassName("bar")
console.log(hr);
hr[0].classList.add("big")



