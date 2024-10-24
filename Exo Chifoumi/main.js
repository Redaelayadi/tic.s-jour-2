let pierre = document.getElementById("pierre")
let feuille = document.getElementById("feuille")
let ciseaux = document.getElementById("ciseaux")
// let resultat = document.getElementById("result")

let tout = ["Pierre","Feuille","Ciseaux"]
let index_aleatoire = Math.floor(Math.random()* tout.length)
let choix_adversaires = tout[index_aleatoire]

function shifoumi(choix_joueur,choix_adversaires) {
    if (choix_joueur === "Pierre"){
        switch (choix_adversaires) {
            case "Pierre":
                alert("Vous avez fait égalité : l'adversaire a fait "+choix_adversaires)
                break;
            case "Feuille":
                alert("Vous avez perdu : l'adversaire a fait "+choix_adversaires)
                break;
            case "Ciseaux":
                alert("Vous avez gagné : l'adversaire a fait "+choix_adversaires)
                break
            default:
                break;
        }
    }
    else if (choix_joueur === "Feuille"){
        switch (choix_adversaires) {
            case "Pierre":
                alert("Vous avez gagné : l'adversaire a fait "+choix_adversaires)
                break;
            case "Feuille":
                alert("Vous avez fait égalité : l'adversaire a fait "+choix_adversaires)
                break;
            case "Ciseaux":
                alert("Vous avez perdu : l'adversaire a fait "+choix_adversaires)
                break
            default:
                break;
        }
    }
    else{
        switch (choix_adversaires) {
            case "Pierre":
                alert("Vous avez perdu : l'adversaire a fait "+choix_adversaires)
                break;
            case "Feuille":
                alert("Vous avez gagné : l'adversaire a fait "+choix_adversaires)
                break;
            case "Ciseaux":
                alert("Vous avez fait égalité : l'adversaire a fait "+choix_adversaires)
                break
            default:
                break;

    }
}
}





pierre.addEventListener('click',()=> {
    let choix_joueur = "Pierre"
    shifoumi(choix_joueur,choix_adversaires)
    }
)

feuille.addEventListener('click',() => {
    let choix_joueur = "Feuille"
    shifoumi(choix_joueur,choix_adversaires)
})
ciseaux.addEventListener('click',() => {
    let choix_joueur = "Ciseaux"
    shifoumi(choix_joueur,choix_adversaires)
})

