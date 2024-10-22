// créer un objet téléphone avec les même clé citées plus haut

let telephone = {
    marque : "Iphone 13",
    prix : 600,
    couleur : "noir",
    applications : ["youtube","gmail","instagram"],
    configuration : {
        RAM : "8GB",
        Stockage : "128GB",
        Ecran : "12 Pouces"
    }
}
console.log(telephone);



// ton téléphone est tombé et l’écran s’est brisé. son prix a diminué de moitié

telephone.prix = telephone.prix / 2
console.log(telephone);

// tu veux télécharger une application (via prompt) si l’application est déjà sur ton téléphone tu ne l’installe pas et si tu a déjà 4 applications tu ne l’installe pas non plus

let application = prompt("Quel application voulez-vous télécharger ?")
if (telephone.applications.includes(application)) {
    alert("Vous possedez déjà cette application")
    
}
else if (telephone.applications.length >= 4){
    alert("Vous possédez trop d'applications")
}
else{
    telephone.applications.push(application)
}
console.log(telephone);

// tu ajoutes des nouveau parametre a ton telephone. motde Bluetooth a true

telephone.modeBluetooth = true
console.log(telephone);
