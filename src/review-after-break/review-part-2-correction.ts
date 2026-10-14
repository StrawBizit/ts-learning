// ===================================================================
// CORRECTION — DIAGNOSTIC APRÈS LA PAUSE — PARTIE 2
// Pour chaque exercice : ce qui n'allait pas (❌), ce qui pouvait être mieux écrit (💡),
// puis l'exercice tel que je l'aurais écrit.
// Exécuter : npx tsx src/review-after-break/review-part-2-correction.ts
// ===================================================================

export {};

// ===== EXERCICE 12 — ✅ Types justes, mais le code promo « n'existe pas » =====
// ❌ Ce qui n'allait pas :
//   - discountCode = "" : un texte vide, c'est un code qui EXISTE mais qui est vide.
//     « Il n'existe pas », c'est null : tu as bien prévu string | null dans le type… sans t'en servir
//     → du coup, le test devient : discountCode !== null
//   - Tes deux fonctions n'ont pas de paramètre : elles lisent isAvailable et discountCode
//     à l'extérieur. C'est le piège de la variable extérieure, vu hier (exercices 4 et 7)
// 💡 Ta question (« une fonction juste pour transformer true/false en mots, c'est lourd ») :
//   tu as raison ! L'outil fait pour ça, c'est le TERNAIRE (leçon 5.7, tu l'avais utilisé
//   dans ta leçon 5 pour stockMessage) : condition ? valeurSiVrai : valeurSiFaux
//   On le range dans une variable, et la phrase finale reste lisible
// 💡 À améliorer :
//   - Bien vu pour | (type) contre || (OU logique) : ce sont deux choses différentes
//   - Coquille dans le texte : « dipose » → « dispose »

const productName: string = "Clavier mécanique";
const productPrice: number = 89.9;
const isAvailable: boolean = true;
const discountCode: string | null = null;

const availabilityLabel = isAvailable ? "disponible" : "indisponible";
const discountLabel =
  discountCode !== null
    ? `avec le code promo ${discountCode}`
    : "sans code promo pour le moment";

console.log(
  `Le ${productName} est ${availabilityLabel} au prix de ${productPrice} CHF, ${discountLabel}.`,
);

// ===== EXERCICE 13 — ✅ Parfait (5/5) =====
// 💡 Précision sur B : city n'a pas de type écrit, mais TypeScript l'a DÉDUIT de "Nancy"
//   (inférence) et l'a figé à string. C'est pour ça que 54 est refusé.

// ===== EXERCICE 14 — ❌ À retravailler =====
// ❌ Ce qui n'allait pas :
//   - expensiveItems = expensiveItems++ : le compteur reste bloqué à 0 !
//     x++ augmente x, mais « renvoie » l'ANCIENNE valeur, que le = réécrit aussitôt par-dessus.
//     Il faut choisir : soit expensiveCount++ tout seul, soit expensiveCount = expensiveCount + 1.
//     Jamais les deux mélangés (même famille d'erreur que le x = x + 1 ET x++ d'hier)
//   - Deux return à la suite : le 2e n'est jamais atteint. return = sortie IMMÉDIATE (exercice 9 B)
//   - Le console.log utilise totalBasket et expansiveItems, qui n'existent qu'à l'intérieur
//     de la fonction (même piège que myObject, leçon 2.7)… et la fonction n'est jamais appelée
//   - La fonction lit prices à l'extérieur au lieu de le recevoir en paramètre
// 💡 À améliorer :
//   - L'énoncé ne demandait pas de fonction : sans fonction, tout le problème disparaît (version 1)
//   - expansive → expensive (« cher » en anglais ; expansive veut dire « étendu »)
//   - La variable de boucle s'appelait price, alors qu'une const price existait déjà dans le
//     fichier (exercice 12) : autorisé, mais source de confusion → itemPrice
//   - Le total affiche 125.10000000000001 : les ordinateurs calculent mal certaines décimales.
//     On arrondit à l'affichage, avec le Math.round vu dans ton renforcement de la leçon 6
//
// TA QUESTION : « comment récupérer mes 2 variables calculées dans la fonction ? »
//   Une fonction ne renvoie qu'UNE seule valeur. Pour en renvoyer deux, on les range
//   dans UN objet, et on renvoie l'objet : exactement ce que tu as fait avec createPotion ! (version 2)

const prices: number[] = [12.5, 34, 8.9, 21, 45.5, 3.2];

// Version 1 : sans fonction, comme le demandait l'énoncé
let basketTotal = 0;
let expensiveCount = 0;

for (const itemPrice of prices) {
  basketTotal = basketTotal + itemPrice;
  if (itemPrice > 20) {
    expensiveCount++;
  }
}

const roundedTotal = Math.round(basketTotal * 100) / 100;
console.log(`Total du panier : ${roundedTotal} CHF`);
console.log(`Articles à plus de 20 CHF : ${expensiveCount}`);

// Version 2 : avec une fonction qui renvoie un objet (pour aller plus loin)
function analyzeBasket(itemPrices: number[]) {
  let total = 0;
  let count = 0;
  for (const itemPrice of itemPrices) {
    total = total + itemPrice;
    if (itemPrice > 20) {
      count++;
    }
  }
  return {
    total: Math.round(total * 100) / 100,
    expensiveCount: count,
  };
}

const basketSummary = analyzeBasket(prices);
console.log(
  `Total : ${basketSummary.total} CHF, dont ${basketSummary.expensiveCount} articles à plus de 20 CHF`,
);

// ===== EXERCICE 15 — ⚠️ Code propre, mais il répond à une autre question =====
// ❌ Ce qui n'allait pas :
//   - L'énoncé demandait d'ATTEINDRE OU DÉPASSER 2000 CHF. Ta condition s'arrête juste AVANT :
//     13 mois pour 1950 CHF, alors que la réponse attendue est 14 mois pour 2100 CHF
//   - Ce n'est pas une erreur de code, c'est une erreur de lecture du besoin. Réflexe de cheffe
//     de projet : relire la spec avant de livrer ;)
// 💡 À améliorer :
//   - const / let parfaitement choisis 👍
//   - Des noms plus précis : monthlySaving, savingsGoal, monthCount, savedAmount
//   - Afficher l'unité : 2100 CHF

const monthlySaving = 150;
const savingsGoal = 2000;
let monthCount = 0;
let savedAmount = 0;

while (savedAmount < savingsGoal) {
  savedAmount = savedAmount + monthlySaving;
  monthCount++;
}

console.log(`Il faut ${monthCount} mois pour atteindre l'objectif, avec ${savedAmount} CHF épargnés.`);

// ===== EXERCICE 16 — ✅ 8/9 =====
// ❌ "" (texte vide) est FALSY : c'est le seul texte falsy. Tous les autres, même " " ou "0", sont truthy
// 💡 Les six falsy à connaître : false, 0, "", null, undefined, NaN (mémo 11 du cours)

// ===== EXERCICE 17 — ✅ Logique juste, parenthèses parfaites =====
// ❌ Ce qui n'allait pas :
//   - customer == "Premium" : toujours === (triple égal), jamais ==
// 💡 À améliorer :
//   - Oui, tu as bien fait ! Tes données arrivent par les paramètres : le piège d'hier est évité 👍
//   - « Le client est premium », « la commande est annulée » : ce sont des oui/non → des booléens
//     (isPremium, isCancelled), plutôt que des textes. Avec un texte, une faute de frappe
//     ("premium" en minuscule, "Canceled" avec un seul l) fausse le résultat SANS aucune erreur
//   - Comme hier (exercice 8) : la condition vaut déjà true ou false → on la renvoie directement
//   - Afficher une phrase plutôt que true / false tout seuls

function hasFreeDelivery(orderAmount: number, isPremium: boolean, isCancelled: boolean) {
  return !isCancelled && (orderAmount >= 100 || (isPremium && orderAmount >= 50));
}

console.log(`Commande de 150 CHF, client standard : ${hasFreeDelivery(150, false, false)}`); // true (montant)
console.log(`Commande de 75 CHF, client premium : ${hasFreeDelivery(75, true, false)}`); // true (premium)
console.log(`Commande de 215 CHF annulée : ${hasFreeDelivery(215, false, true)}`); // false (annulée)

// ===== TA QUESTION SUR LES TYPES D'OBJETS =====
// Si tu ne t'en souviens pas, c'est normal : d'après tes fichiers d'exercices, tu ne l'as
// jamais vu. Tes leçons TypeScript ont couvert les types simples, les unions et les tableaux.
// Typer un objet, ce sera une prochaine leçon.
