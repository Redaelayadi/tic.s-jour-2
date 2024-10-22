for (let i = 1; i <= 10; i++) {
    console.log(i);       
}


let i = 0
while ( i <= 20) {
    while (i % 2 === 0) {
        console.log(i);
        i++;
    }
    i++;
}


let longueur = prompt("Jusqu'ou voulez vous calculer la somme des nombres")
longueur = Number(longueur)
let resultat = 0
for (let index = 1; index <= longueur; index++) {
    resultat += index
    //console.log(resultat);    
}
console.log(resultat);



for (let i = 1; i <= 10; i++) {
    console.log(i * 5);
    
    
}


let prenoms = ["Alice", "Bob", "Charlie"]
prenoms.forEach(prenom => {
    console.log(prenom);
    }
)


let mdp = prompt("Veuillez taper le bon mots de passe")
while (mdp !== "1234" ) {
    mdp = prompt("Veuillez réessayer et taper le bon de mot de passe")   
}
alert('Bienvue')