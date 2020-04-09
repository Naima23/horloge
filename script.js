// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()


//Ajouter l'heure , minite , seconde  dans des varaiables



// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


// Déplacer les aiguilles 
function demarrerLaMontre() {
    var dateNow = new Date();
    var hr = dateNow.getHours();
    var mn = dateNow.getMinutes();
    var se = dateNow.getSeconds();

    var seDeg = se * 6;

    AIGUILLESEC.style.transform = `rotate(${seDeg}deg)`; // 'rotate('+ seDeg + 'deg)';
    var mnDeg = (mn * 6) + (0.1 * se);
    AIGUILLEMIN.style.transform = `rotate(${mnDeg}deg)`;
    var hrDeg = (hr * 30) + (0.5 * mn);
    AIGUILLEHR.style.transform = `rotate(${hrDeg}deg)`;



}
demarrerLaMontre();
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);