// ===================================================================
// SALVE CIBLÉE N°2 — Tableaux d'objets, déclarations, conditions de boucle
// Exécuter : node src/reinforce-objects-arrays/exercises.js
// Note en commentaire comment tu y es arrivée (facile, effort, cours consulté : quelle section ?)
//
// Rappel des règles :
//   - Exercices de PRÉDICTION : écris ta réponse en commentaire AVANT de dé-commenter et d'exécuter.
//   - Exercices de DÉBOGAGE : écris en commentaire la CAUSE du problème AVANT de toucher au code.
//   - Quand un résultat attendu est indiqué entre crochets et que le tien est différent :
//     cherche POURQUOI avant de modifier ton code, et note ce que tu as trouvé.
// ===================================================================

// ===== EXERCICE 1 — PRÉDICTION + DÉBOGAGE =====
// Ce code s'exécute sans erreur et affiche ce qu'on attend.
// a) Pourquoi est-il pourtant problématique ?
// b) Que se passerait-il si on inversait l'ordre des deux console.log ? Prédis, puis vérifie.
// c) Corrige-le.
//
const bagList = [10, 25, 40];
const lastBag = bagList[bagList.length - 1];

function sumGold(bags) {
  let total = 0;
  for (const bag of bags) {
    total = total + bag;
  }
  return total;
}

function describeLastBag() {
  return `Le dernier sac contenait ${lastBag} pièces d'or.`;
}

console.log(describeLastBag(lastBag));
console.log(sumGold(bagList));

// COMMENTAIRE :
// Réponse A : si je prends dans l'ordre de lecture :
// - pas de let devant total = 0 donc ça créé une variable globale (qui risque donc d'interférer ailleurs)
// - pas de const devant bag of bags donc pareil variable globale (qui risque donc d'interférer ailleurs)
// - la fonction describeLastBag me fait douter car que ce se passerait-il si on voulait afficher le 2ème
//  sac? J'ai l'impression qu'elle est fausse et est juste que par chance dans ce cas précis.
// - il n'y a pas de variable bag donc describeLastBag ne peut pas marcher
// Réponse B : Probablement que ça renverrai undefined sur le describe puisque bag n'a pas de valeur
// Réponse C : Écoute, j'ai probablement pas fait correctement mais j'ai cherché comment faire un
// "dernier" d'une liste (parce que ça me perturbait) et j'ai trouvé le arr[arr.length-1] et du coup ça
// fonctionne :)

// ===== EXERCICE 2 =====
// Voici l'inventaire d'un marchand :
const merchantStock = [
  { name: "Épée", price: 150, quantity: 3 },
  { name: "Bouclier", price: 90, quantity: 0 },
  { name: "Arc", price: 120, quantity: 5 },
  { name: "Potion", price: 20, quantity: 12 },
  { name: "Armure", price: 400, quantity: 0 },
];
// Écris une fonction qui reçoit un inventaire et renvoie la valeur totale du stock
// (pour chaque objet : son prix multiplié par la quantité disponible).
// Affiche une phrase avec le résultat.                                   [1290]

function calculateTotalStockValue(items) {
  let itemTotal = 0;
  let stockTotal = 0;
  for (const item of items) {
    itemTotal = item.price * item.quantity;
    stockTotal = stockTotal + itemTotal;
  }
  return stockTotal;
}

console.log(
  `La valeur du stock total du marchand est de ${calculateTotalStockValue(merchantStock)} pièces.`,
);

// COMMENTAIRE : ca m'a demandé quand même pas mal de réflexion (plus que ce que je ne l'aurais pensé)
// Il m'a encore fallu ajouter dans un 2nd temps les initialisations de itemTotal et stockTotal car
// Ca n'est pas encore naturel (j'ai envie de mettre les initialisation directement au moment du calcul
// dans la boucle for ici et ça ne marche pas...)

// ===== EXERCICE 3 =====
// Avec le même inventaire, écris une fonction qui permet d'afficher :
//   - le nom de l'objet le plus cher PARMI CEUX QUI SONT EN STOCK
//   - le nombre d'objets en rupture de stock
// Affiche une phrase avec les deux informations.                [Épée, 2]

function evaluateStock(items) {
  let mostExpansiveItemName = "";
  let mostExpansiveItemPrice = 0;
  let outOfStockCount = 0;
  for (const item of items) {
    if (item.quantity > 0) {
      if (item.price > mostExpansiveItemPrice) {
        mostExpansiveItemPrice = item.price;
        mostExpansiveItemName = item.name;
      }
    } else {
      outOfStockCount++;
    }
  }
  return {
    mostExpansiveItemName: mostExpansiveItemName,
    outOfStockCount: outOfStockCount,
  };
}

const showMerchantStock = evaluateStock(merchantStock);

console.log(
  `L'objet le plus cher qui est en stock est : ${showMerchantStock.mostExpansiveItemName}. Le marchand a ${showMerchantStock.outOfStockCount} objet(s) en rupture de stock.`,
);

// COMMENTAIRE : contre toute attente, pas trop de difficultés ici,
// surtout que puisque je n'y avais pas pensé dans l'exercice juste avant,
// là j'ai bien pensé à déclarer mes variables hors de la boucle for.
// le seul problème c'est que j'avais oublié de mettre (merchantStock) en paramètre de la fonction dans ma
// variable showMerchantStock mais je m'en suis vite rendue compte :)

// ===== EXERCICE 4 =====
// Un héros : { name: "Thrall", health: 70, maxHealth: 100 }
// Écris une fonction qui reçoit un héros et le nombre de PV qu'une potion soigne,
// et qui renvoie les PV du héros après avoir bu la potion.
// Les PV ne peuvent jamais dépasser le maximum du héros.
// Teste avec une potion de 50 PV puis une potion de 20 PV.               [100, puis 90]
// Après tes appels, vérifie par un affichage que l'objet héros n'a pas été modifié.

function applyHealthPotion(hero, healthPotion) {
  let healthAfter = hero.health + healthPotion;
  if (healthAfter <= 100) {
    healthAfter = healthAfter;
  } else {
    healthAfter = 100;
  }
  return healthAfter;
}

const thrall = {
  name: "Thrall",
  health: 70,
  maxHealth: 100,
};

console.log(applyHealthPotion(thrall, 50));
console.log(thrall);

// COMMENTAIRE : Pas vraiment de difficulté ici même si j'ai du réfléchir mais globalement plutôt à l'aise

// ===== EXERCICE 5 =====
// Une guilde possède 1200 pièces dans son trésor. Chaque semaine, elle dépense 150 pièces
// et en gagne 90. Écris une fonction qui reçoit le trésor de départ, les dépenses par semaine,
// les gains par semaine et un seuil, et qui permet d'afficher :
//   - au bout de combien de semaines le trésor passe sous le seuil
//   - le montant du trésor à ce moment-là
// Teste avec un seuil de 500 pièces.                                     [12 semaines, 480]

function setBudget(budget, perWeekSpending, perWeekEarning, limit) {
  let weekCount = 0;
  let remainingBudget = budget;
  if (perWeekEarning > perWeekSpending) {
    return null;
  } else {
    while (remainingBudget > limit) {
      weekCount++;
      remainingBudget = remainingBudget - perWeekSpending + perWeekEarning;
    }
  }
  return { weekCount: weekCount, remainingBudget: remainingBudget };
}

const limitStatus = setBudget(1200, 150, 90, 500);

if (limitStatus === null) {
  console.log(
    `On dépense moins que ce que l'on gagne : pas de limite à surveiller !`,
  );
} else {
  console.log(
    `Nombre de semaine avant de passer sous le seuil : ${limitStatus.weekCount} | Montant du trésor à ce moment-là : ${limitStatus.remainingBudget}`,
  );
}

// COMMENTAIRE : pas de difficulté particulière ici... Mais je pensais que ça n'allait pas marcher du premier coup
// car il y a toujours un truc à corriger au premier execute mais pas ici :) L'erreur à laquelle je m'attendais :
// que ça m'affiche 11 semaine et 520 gold restants. Si je voulais strictement pas dépasser la limite des 500
// comment aurait-il fallu faire du coup ?

// Ensuite : que se passerait-il si la guilde gagnait autant ou plus qu'elle ne dépense ?
// Écris ta prédiction en commentaire AVANT d'essayer (et garde Ctrl + C sous la main).
// Puis modifie ta fonction pour qu'elle renvoie null dans ce cas, et affiche une phrase
// adaptée quand le résultat est null.

//COMMENTAIRE AVANT execute : la limite n'est jamais franchie donc on tombe dans un boucle infinie !
// Cette 2ème partie m'a un peu donné de fil à retordre, au final, il suffisait d'ajouter une condition
// if dans la fonction et une condition if dans le console.log :)

// ===== EXERCICE 6 =====
// Voici les commandes du jour d'une boutique :
const orders = [
  { amount: 120, isCancelled: false },
  { amount: 45, isCancelled: true },
  { amount: 300, isCancelled: false },
  { amount: 80, isCancelled: false },
  { amount: 500, isCancelled: true },
];
// Écris une fonction qui reçoit une liste de commandes et permet d'afficher :
//   - le chiffre d'affaires du jour (la somme des commandes NON annulées)
//   - le nombre de commandes annulées
//   - le montant de la plus grosse commande non annulée
// Affiche une phrase avec les trois informations.                    [500, 2, 300]

function summarizeOrders(ordersList) {
  let dailySales = 0;
  let cancelledOrdersCount = 0;
  let biggestOrderAmount = 0;
  for (const order of ordersList) {
    if (order.isCancelled) {
      cancelledOrdersCount++;
    } else {
      dailySales = dailySales + order.amount;
      if (biggestOrderAmount < order.amount) {
        biggestOrderAmount = order.amount;
      }
    }
  }
  return {
    dailySales: dailySales,
    cancelledOrdersCount: cancelledOrdersCount,
    biggestOrderAmount: biggestOrderAmount,
  };
}

const orderSummary = summarizeOrders(orders);

console.log(
  `Le CA du jour est de ${orderSummary.dailySales} €, grâce notamment à une commande de ${orderSummary.biggestOrderAmount} et malgré ${orderSummary.cancelledOrdersCount} commande(s) annulée(s).`,
);

// COMMENTAIRE : Étonnamment relativement facile ici. La seule raison de pourquoi
// ça n'a pas marché du premier coup c'est parce que j'avais oublié order. devant le isCancelled de ma condition if
// et dès que ça m'a dit que isCancelled n'était pas défini, j'ai pas eu besoin de réfléchir pour le corriger :)

// ===================================================================
// DÉFI
// ===================================================================

// ===== EXERCICE 7 =====
// Voici l'état de ton groupe après un combat :
const party = [
  { name: "Thrall", health: 45, isAlive: true },
  { name: "Jaina", health: 0, isAlive: false },
  { name: "Sylvanas", health: 80, isAlive: true },
  { name: "Anduin", health: 30, isAlive: true },
];
// Écris une fonction qui reçoit le groupe et renvoie le nom du héros VIVANT qui a le moins
// de PV (c'est lui qu'on soigne en premier).                                  [Anduin]
// Vérifie aussi que ta fonction donne la bonne réponse si on change les PV des héros
// (par exemple, si Sylvanas tombe à 10 PV).

function chooseWhoToHealFirst(players) {
  let leastHealth = 100;
  let playerToHealFirstName = "";
  for (const player of players) {
    if (player.isAlive) {
      if (leastHealth > player.health) {
        leastHealth = player.health;
        playerToHealFirstName = player.name;
      }
    }
  }
  return playerToHealFirstName;
}

console.log(`Il faut soigner ${chooseWhoToHealFirst(party)} en priorité !`);

// COMMENTAIRE : de la réflexion mais pas trop de difficultés ici ! Ca n'a pas marché du premier coup
// uniquement parce que j'avais fait une faute de frappe pour réécrire health dans mon if....
