// ===================================================================
// PACK DE RENFORT — Boucles + conditions + opérateurs
// ===================================================================

// ===== EXERCICE 8 — Le restaurant =====
// Un restaurant peut accueillir 80 personnes maximum.
// Tu es à l'entrée et tu fais entrer les clients un par un dans cet ordre.
// Affiche à la fin combien sont entrés et combien ont été refusés.
const arrivals: number[] = [4, 2, 6, 3, 5, 8, 4, 12, 2, 6, 4, 7, 5, 3, 8, 6, 4];
// Chaque nombre = la taille d'un groupe qui se présente à l'entrée.
// Règle : si le groupe entier rentre, ils entrent tous. Sinon, ils sont tous refusés (pas de scission).
// La file continue tant qu'il y a des arrivants à traiter.
const maxCapacity: number = 80;
let peopleInside: number = 0;
let refusedPeople: number = 0;

for (const arrival of arrivals) {
  if (peopleInside + arrival <= maxCapacity) {
    peopleInside = peopleInside + arrival;
  } else {
    refusedPeople = refusedPeople + arrival;
  }
}
console.log(`Nombre accepté : ${peopleInside}`);
console.log(`Nombre refusé : ${refusedPeople}`);

// ===== EXERCICE 9 — Le code secret =====
// Tu dois trouver un code à 4 chiffres en testant des combinaisons jusqu'à tomber sur la bonne.
// Le bon code est 4271.
// Simule le fait d'essayer chaque code de 0000 à 9999 dans l'ordre,
// et arrête-toi dès que tu trouves le bon.
// Affiche : combien d'essais il a fallu.
const code: number = 4271;
let tryCount: number = 0;

for (let tryCode = 0; tryCode !== code; tryCode++) {
  tryCount++;
}
console.log(`Nombre d'essais : ${tryCount}`);

// ===== EXERCICE 10 — Le client mystère =====
const allClients: string[] = [
  "Ahmed",
  "Béatrice",
  "Camille",
  "David",
  "Élise",
  "Florent",
  "Géraldine",
];
// Le client mystère du jour s'appelle "Camille".
// Parcours la liste et affiche pour chaque nom :
//   - "Bonjour [nom]" pour les clients normaux
//   - "Bonjour [nom] — vous êtes notre client mystère du jour !" pour Camille
// Compte aussi combien de clients ont été salués AVANT le client mystère, et affiche-le à la fin.
const mysteryClient: string = "Camille";
let count: number = 0;
let mysteryFound: boolean = false;

for (const client of allClients) {
  if (client === mysteryClient) {
    console.log(`Bonjour ${client} ! Vous êtes notre client mystère du jour !`);
    mysteryFound = true;
  } else {
    console.log(`Bonjour ${client} !`);
    if (!mysteryFound) {
      count++;
    }
  }
}

console.log(`Nombre de clients salués avant le client mystère : ${count}`);

// ===== EXERCICE 11 — La station-service =====
// Tu remplis un réservoir de 60 litres.
// La pompe débite 0.8 litre par seconde.
// Affiche à chaque seconde le niveau actuel du réservoir (arrondi à 1 décimale).
// Arrête-toi quand le réservoir est plein (ou dépasse).
// Affiche à la fin le temps total écoulé.
// (Indice pour arrondir : Math.round(x * 10) / 10 te donne 1 décimale.)
const tankCapacity: number = 60;
const perSecond: number = 0.8;

for (
  let currentFuel = 0;
  currentFuel <= tankCapacity;
  currentFuel = currentFuel + perSecond
) {
  console.log(Math.round(currentFuel * 10) / 10);
}

// ===== EXERCICE 12 — La ronde de sécurité =====
const sensorReadings: number[] = [
  22, 21, 23, 24, 28, 31, 29, 27, 33, 35, 26, 24,
];
// Ce sont des températures relevées par un capteur.
// Une alerte se déclenche dès qu'on dépasse 30 degrés ET que la mesure suivante dépasse aussi 30 degrés.
// (Deux mesures consécutives au-dessus de 30 = alerte.)
// Affiche à chaque alerte : les deux valeurs concernées et leur position dans le tableau.
// Affiche à la fin le nombre total d'alertes détectées.
// (Indice : un for...of ne te donne pas l'index. Pour ça, soit un for classique, soit autre approche.)

// ===== EXERCICE 13 — Le panier d'achats =====
const cart: number[] = [12.5, 4.9, 23.0, 8.4, 15.75, 6.2, 32.1, 5.8];
// Tu as une carte de fidélité qui donne 10% de remise sur les articles à plus de 20 CHF.
// Tu as aussi un budget total de 80 CHF.
// Parcours le panier dans l'ordre, applique la remise quand elle s'applique,
// et ajoute les articles tant que ça rentre dans le budget.
// Si un article fait dépasser, on le saute et on continue avec les suivants.
// Affiche à la fin :
//   - le nombre d'articles achetés
//   - le total dépensé
//   - le budget restant
//   - le nombre d'articles sautés
