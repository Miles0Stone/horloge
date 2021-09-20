// Séléctionner les aiguilles de montre

const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

function demarrerLamontre(){
    const now = new Date();                             /*L'objet Date représente le nombre de millisecondes écoulées sur l'échelle UTC*/
    
//Stocker l'heure , minute , seconde  dans des varaiables

const secondes = now.getSeconds();                      /*Méthode Getsecond renvoie les secondes par rapport à l'heure locale renseignée*/
const minutes = now.getMinutes();
const heure = now.getHours();

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

const secDeg = 360/60;                                  /*Calcule des degrés pour les secondes (6°), minutes (0,1°),heures (0,008°)*/
const minDeg = 360/60/60;
const hourDeg = 360/12/60/60;

// Déplacer les aiguilles 

let total = secondes + (minutes*60) + (heure*3600);             /*Création d'une variable appelée total regroupant les secondes, les minutes et les heures convertient en seconde sur 1h*/


AIGUILLESEC.style.transform = `rotate(${total * secDeg}deg)`;    
AIGUILLEMIN.style.transform = `rotate(${total * minDeg}deg)`;  /*La propriété transform permet de faire pivoter grace à la fonction CSS rotate. */
AIGUILLEHR.style.transform = `rotate(${total * hourDeg}deg)`;

}


// Exercuter la fonction chaque second

var interval = setInterval( demarrerLamontre , 1000);




