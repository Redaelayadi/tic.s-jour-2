// EXO1
// Créer une fonction qui prend deux paramètres, et les additionne, et fait un console.log du résultat.(Additionner)

function addition(a,b) {
    console.log(a+b);    
}

// EXO2
// Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)
function Soustraction(a,b) {
    console.log(a-b);    
}
addition(4,5)

// EXO3  
// Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)
function Multiplication(a,b) {
    console.log(a*b);    
}
Multiplication(4,5)

// EXO4 
// Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)
function division(a,b) {
    console.log(a/b);    
}
division(4,5)

// EXO5
// Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)
function Modulo(a,b) {
    console.log(a%b);    
}
Modulo(4,5)

// EXO6
// Créez une fonction qui prend un paramètre, et retourne la racine carré de ce nombre, et faites un console.log du résultat.(Racine carrée)
function racine(b) {
    console.log(Math.sqrt(b));    
}
racine(9)
// EXO7
// Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)
function exposant(a,b){
    console.log(Math.pow(a,b))    
}
exposant(4,4)
// EXO8
// Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;
function capitalize(mot){
    mot = mot.capitalize()
    console.log(mot);
    
}
capitalize("beau")
// EXO9
// Créer une function [calcul] ayant 3 paramètres
// nbr1 , operator , nbr2
// Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch) 


function calcul(nbr1,operator,nbr2) {
switch (operator) {
    case "+":
        console.log(nbr1+nbr2);
        
        break;

    case "-":
        console.log(nbr1-nbr2);
        
        
        break;

    case "*":
        console.log(nbr1*nbr2);
        
        
        break;

    case "/":
        console.log(nbr1/nbr2);
        
        
        break;
    
    default:
        break;

}
}
calcul(5,"*",7)