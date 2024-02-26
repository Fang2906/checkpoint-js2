// Fonctions de manipulation de chaînes :

// Reverse:
function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse('sidi va a la maison'));

// nombre de carractere 
function nombredecarractere(Bonjour){
    return Bonjour.length;
}
var mots= "salut";
var phrase= "sallut comment vas-tu ?";
console.log("le nombre de carractere est de : ", nombredecarractere(mots));
console.log("le nombre de carractere est de : ", nombredecarractere(phrase));

// mettre en maj
function mettreenmaj(majuscule) {
  return majuscule.toUpperCase();
}
var phrase = "Badiene coatch comment allez vous ?";
console.log("en maj: " , mettreenmaj(phrase));


// Fonctions du tableau :

// Rechercher le maximum et le minimum :

function donnelemaxetlemin (maxmin) {
    var maximum = Math.max(...maxmin);
    var minimum = Math.min(...maxmin);
    return [maximum, minimum];
}
var note = [23, 43, 53, 9, 10, 7, 197];
var resultat = donnelemaxetlemin(note);

console.log("le max-min de de mes notes est : ", resultat);

// Somme du tableau :
function somme(tableau) {
    somme = 0
for (let i = 0; i < tableau.length; i++) {
   somme += tableau [i];   
}
  return somme;
}
let momtableau = [ 24 , 11, 92, 10, 5 ];
let total = somme(momtableau)
console.log(" la somme du tableau est : " , total );

// Filtrer le tableau : 
function filtrerTableau(tableau, condition) {
    var resultat = [];
    for (var i = 0; i < tableau.length; i++) {
        if (condition(tableau[i])) {
            resultat.push(tableau[i]);
        }
    }
    return resultat;
}

var nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var nombresPairs = filtrerTableau(nombres, function(element) {
    return element % 2 === 0;
});
console.log("Nombres pairs :", nombresPairs);

var mots = ["chat", "chien", "lapin", "tigre", "lion"];
var motsDeLongueur4 = filtrerTableau(mots, function(element) {
    return element.length === 4;
});
console.log("Mots de longueur 4 :", motsDeLongueur4);




// Fonctions mathématiques :

// Factorielle :
function factorielle(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorielle(n - 1);
    }
}

var nombre = 5;
var resultat = factorielle(nombre);
console.log("La factorielle de", nombre, "est :", resultat);



// Vérification des nombres premiers : 

function estNombrePremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(estNombrePremier(17));
console.log(estNombrePremier(25));




// Séquence de Fibonacci :


function fibonacci(nombreDeTermes) {
    var sequence = [0, 1];
    for (let i = 2; i < nombreDeTermes; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

var nombreDeTermes = 10;
var sequenceFibonacci = fibonacci(nombreDeTermes);
console.log("Séquence de Fibonacci jusqu'à", nombreDeTermes, "termes :", sequenceFibonacci);

