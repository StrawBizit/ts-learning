// Lesson 2 — Conditions, loops, operators
// Exercises file

// ===== EXERCICE 1 — Opérateurs de comparaison =====
// Contexte : on vérifie l'éligibilité d'un user à différentes choses selon son âge et son nom.
// TODO : Déclare 3 variables :
//   - userAge (number, valeur 25)
const userAge: number = 25;
//   - requiredAge (number, valeur 18)
const requiredAge: number = 18;
//   - userName (string, valeur "Camille")
const userName: string = "Camille";

// TODO : Crée 5 variables booléennes qui stockent le résultat des comparaisons suivantes :
//   - isAdult : userAge est-il supérieur ou égal à requiredAge ?
const isAdult: boolean = userAge >= requiredAge;
//   - isExactlyMajor : userAge est-il strictement égal à requiredAge ?
const isExactlyMajor: boolean = userAge === requiredAge;
//   - isMinor : userAge est-il strictement inférieur à requiredAge ?
const isMinor: boolean = userAge < requiredAge;
//   - isNotNamedBob : userName est-il strictement différent de "Bob" ?
const isNotNamedBob: boolean = userName !== "Bob";
//   - isOldEnoughForRetirement : userAge est-il supérieur ou égal à 65 ?
const isOldEnoughForRetirement: boolean = userAge >= 65;

// TODO : Affiche les 5 résultats dans la console (template strings recommandées)
console.log(`Résultat de "isAdult" : ${isAdult}.`);
console.log(`Résultat de "isExactlyMajor" : ${isExactlyMajor}.`);
console.log(`Résultat de "isMinor" : ${isMinor}.`);
console.log(`Résultat de "isNotNamedBob" : ${isNotNamedBob}.`);
console.log(
  `Résultat de "isOldEnoughForRetirement" : ${isOldEnoughForRetirement}.`,
);

// ===== EXERCICE 2 — Opérateurs logiques (cas métier MPRO Orders) =====
// Règle métier :
//   "Un user peut modifier une commande s'il est admin,
//    OU s'il est à la fois le créateur de la commande ET que la commande n'est pas encore expédiée."
//
// TODO : Pose les variables qu'il te faut (à toi de réfléchir lesquelles).
let isAdmin: boolean = true;
const isCreator: boolean = true;
const orderStatus: string = "Expédée";
// TODO : Calcule le résultat dans une variable booléenne canEditOrder.
let canEditOrder: boolean = isAdmin || (isCreator && orderStatus !== "Expédée");
// TODO : Teste avec DEUX jeux de valeurs différents qui donnent des résultats opposés
//        (un true et un false). Affiche les deux résultats dans la console.
console.log(
  `CAS 1 : Est-ce que l'utilisateur peut modifier la commande? ${canEditOrder}`,
);
isAdmin = false;
canEditOrder = isAdmin || (isCreator && orderStatus !== "Expédée");
console.log(
  `CAS 2 : Est-ce que l'utilisateur peut modifier la commande? ${canEditOrder}`,
);

// ===== EXERCICE 3 — Conditions if / else if / else =====
// Contexte : on classe une commande selon son montant.
// Règles :
//   - montant <= 0           : "Montant invalide"
//   - montant < 50           : "Petite commande"
//   - 50 <= montant <= 500   : "Commande standard"
//   - montant > 500          : "Grosse commande, traitement prioritaire"
//
// TODO : Déclare une variable orderAmount (number).
let orderAmount: number | null = null;
// TODO : Écris une chaîne if / else if / else qui affiche le bon message dans la console.
if (orderAmount === null || orderAmount <= 0) {
  console.log(`Montant invalide`);
} else if (orderAmount < 50) {
  console.log(`Petite commande`);
} else if (orderAmount <= 500) {
  console.log(`Commande standard`);
} else {
  console.log("Grosse commande à traiter en priorité");
}
// TODO : Teste avec au moins 3 valeurs différentes (change la valeur de orderAmount, ou
//        duplique le bloc avec des valeurs différentes — comme tu préfères).
// Réfléchis à l'ordre de tes conditions : laquelle doit venir en premier ?
orderAmount = -29;
if (orderAmount === null || orderAmount <= 0) {
  console.log(`Montant invalide`);
} else if (orderAmount < 50) {
  console.log(`Petite commande`);
} else if (orderAmount <= 500) {
  console.log(`Commande standard`);
} else {
  console.log("Grosse commande à traiter en priorité");
}

orderAmount = 33;
if (orderAmount === null || orderAmount <= 0) {
  console.log(`Montant invalide`);
} else if (orderAmount < 50) {
  console.log(`Petite commande`);
} else if (orderAmount <= 500) {
  console.log(`Commande standard`);
} else {
  console.log("Grosse commande à traiter en priorité");
}

orderAmount = 149;
if (orderAmount === null || orderAmount <= 0) {
  console.log(`Montant invalide`);
} else if (orderAmount < 50) {
  console.log(`Petite commande`);
} else if (orderAmount <= 500) {
  console.log(`Commande standard`);
} else {
  console.log("Grosse commande à traiter en priorité");
}

orderAmount = 699;
if (orderAmount === null || orderAmount <= 0) {
  console.log(`Montant invalide`);
} else if (orderAmount < 50) {
  console.log(`Petite commande`);
} else if (orderAmount <= 500) {
  console.log(`Commande standard`);
} else {
  console.log("Grosse commande à traiter en priorité");
}

// ===== EXERCICE 4 — Boucle for classique =====
// TODO : Affiche tous les nombres pairs entre 1 et 20 inclus, un par ligne, avec un for classique.
//        Pas de tableau, pas de for...of.
// Choisis ta méthode : incrémenter de 2 en 2, ou incrémenter de 1 en 1 et tester la parité.
// Mets un commentaire au-dessus de ta boucle pour expliquer ton choix.
// je te fais les 2 versions pour m'entrainer : la plus simple c'est de ne pas utiliser le i++ classique mais i=i+2, c'est plus moche, on a plus l'habitude d'utiliser le i++ mais toute la boucle est plus simple !
for (let i = 2; i <= 20; i = i + 2) {
  console.log(i);
}
// ici c'est la version 2 : on utilise le i++ mais on ajoute une fonction if imbriqué qui controle si le numéro est pair et on l'affiche. Alors là comme c'est plus compliqué, il risque d'y avoir des erreurs :D
// j'ai du chercher sur internet comment on controlait si un nombre etait pair ou pas pair (je me rappelais qu'il y avait un truc avec "MOD" (resultat de la division en excel) mais je n'avais plus les détails), pas sure qu'on pouvait ne pas mettre de else mais je n'ai pas d'erreur alors j'essaye comme cela :)
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// ===== EXERCICE 5 — Boucle for...of =====
const clientNames: string[] = [
  "Aubry",
  "Bernard",
  "Charpentier",
  "Dubois",
  "Eckert",
];
// TODO : Parcours le tableau et affiche pour chaque nom la phrase : "Bonjour, [nom] !"
//        Utilise for...of et une template string.
//j'ai complétement changé le nom de la variable pour que je me rappelle que je peux mettre ce que je veux comme nom (j'en étais pas sure avant d'essayer et qu'on est pas obligé de reprendre le meme nom au singulier. Mais c'est peut etre une bonne pratique de le faire?
for (const name of clientNames) {
  console.log(`Bonjour ${name} !`);
}

// ===== EXERCICE 6 — Boucle while avec accumulateur =====
// Contexte : tu as un budget de 1000 CHF et tu fais des achats successifs de 137 CHF chacun.
// TODO : Avec une boucle while, calcule combien d'achats tu peux faire avant de dépasser le budget.
// TODO : Affiche à la fin :
//        - le nombre d'achats effectués
//        - le budget restant
// Indice : tu auras besoin de deux variables qui évoluent au fil de la boucle.
// Réfléchis bien à laquelle est const et laquelle est let.
const budget: number = 1000;
const purchaseAmount: number = 137;
let purchaseCount: number = 0;
let remainingBudget: number = budget - purchaseCount * purchaseAmount;

while (remainingBudget > purchaseAmount) {
  purchaseCount = purchaseCount + 1;
  remainingBudget = budget - purchaseCount * purchaseAmount;
}
console.log(purchaseCount);
console.log(remainingBudget);

// ===== EXERCICE 7 — Combinaison conditions + boucle =====
const orderAmounts: number[] = [42, 156, 890, 23, 510, 78, 1200, 35];
// TODO : Parcours ce tableau et compte combien il y a de commandes dans chaque catégorie
//        de l'exercice 3 ("Petite", "Standard", "Grosse").
//        Tu n'as pas besoin de gérer "Montant invalide" ici (tous les montants sont valides).
// TODO : Affiche à la fin les 3 compteurs.
// Indice : tu as besoin de 3 variables compteurs initialisées à 0, et tu les incrémentes
//          dans la bonne branche d'un if/else if à l'intérieur de ta boucle.
let smallCount: number = 0;
let mediumCount: number = 0;
let bigCount: number = 0;

for (const amount of orderAmounts) {
  if (amount < 50) {
    smallCount = smallCount + 1;
  } else if (amount <= 500) {
    mediumCount = mediumCount + 1;
  } else {
    bigCount = bigCount + 1;
  }
}
console.log(`Nombre de petites commandes : ${smallCount}`);
console.log(`Nombre de commandes standards : ${mediumCount}`);
console.log(
  `Nombre de grosses commandes (à traiter en priorité) : ${bigCount}`,
);

// ===== EXERCICE BONUS (optionnel) — Le piège des truthy/falsy =====
// TODO : Pour chacune des valeurs ci-dessous, devine AVANT d'exécuter si elle est truthy ou falsy.
//        Écris ta prédiction en commentaire, puis vérifie avec un if.
// Valeurs à tester : 0, "", "0", [], {}, null, undefined, "false", -1
// Exemple de syntaxe pour tester :
//   if (valeur) { console.log("truthy"); } else { console.log("falsy"); }
// Combien tu en as eu juste sans tricher ?
if (0) {
  console.log(`0 ==> truthy`);
} else {
  console.log(`0 ==> falsy`);
} // falsy
if ("") {
  console.log(`"" ==> truthy`);
} else {
  console.log(`"" ==> falsy`);
} // falsy
if ("0") {
  console.log(`"0" ==> truthy`);
} else {
  console.log(`"0" ==> falsy`);
} // truthy
if ([]) {
  console.log(`[] ==> truthy`);
} else {
  console.log(`[] ==> falsy`);
} // truthy
if ({}) {
  console.log(`{} ==> truthy`);
} else {
  console.log(`{} ==> falsy`);
} // truthy
if (null) {
  console.log(`null ==> truthy`);
} else {
  console.log(`null ==> falsy`);
} // falsy
if (undefined) {
  console.log(`undefined ==> truthy`);
} else {
  console.log(`undefined ==> falsy`);
} // falsy
if ("false") {
  console.log(`"false"==> truthy`);
} else {
  console.log(`"false"==> falsy`);
} // truthy
if (-1) {
  console.log(`-1 ==> truthy`);
} else {
  console.log(`-1 ==> falsy`);
} // truthy
