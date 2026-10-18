// ===================================================================
// CORRECTION — SALVE CIBLÉE N°2 — Tableaux d'objets, déclarations, conditions de boucle
// Pour chaque exercice : ce qui n'allait pas (❌), ce qui pouvait être mieux écrit (💡),
// puis l'exercice tel que je l'aurais écrit.
// Exécuter : node src/reinforce-objects-arrays/exercises-correction.js
// ===================================================================

// ===== EXERCICE 1 — ✅ Diagnostic juste =====
// ✅ a) Tu as trouvé les deux variables non déclarées (total, bag) ET le vrai problème :
//   describeLastBag ne marche « que par chance ». Elle lit bag, une variable globale cachée
//   que sumGold a laissé fuir. Elle dépend donc du fait que sumGold ait tourné AVANT elle
// ❌ b) Ta prédiction : « undefined ». En réalité, le programme PLANTE avec
//   « ReferenceError: bag is not defined ». La nuance est importante :
//     - undefined = la variable EXISTE, mais n'a pas (encore) de valeur
//     - « is not defined » = la variable N'EXISTE PAS DU TOUT
//   Si describeLastBag passe en premier, bag n'a pas encore été créée par la boucle : elle n'existe pas
// ✅ c) bagList[bagList.length - 1] : ta trouvaille est la méthode standard ! Les crochets avec un
//   numéro donnent l'élément à cette POSITION (son « index »), et les positions commencent à 0
//   (c'est pour ça que la leçon 4.2 disait « on verra pourquoi avec les tableaux »).
//   length est le nombre d'éléments (3 ici), donc le dernier est à la position length - 1 = 2
// ❌ Mais describeLastBag n'a toujours pas de paramètre : elle lit lastBag à l'extérieur.
//   Le lastBag que tu lui passes à l'appel est ignoré (le même piège que l'exercice 2 de la
//   salve n°1). Elle ne sait décrire qu'UN seul tableau de sacs
// 💡 Les deux fonctions doivent recevoir les sacs en paramètre : chacune devient autonome,
//   et l'ordre des appels n'a plus aucune importance

function sumGold(bags) {
  let total = 0;
  for (const bag of bags) {
    total = total + bag;
  }
  return total;
}

function describeLastBag(bags) {
  const lastBag = bags[bags.length - 1];
  return `Le dernier sac contenait ${lastBag} pièces d'or.`;
}

const goldBags = [10, 25, 40];
console.log(describeLastBag(goldBags)); // l'ordre ne pose plus aucun problème
console.log(sumGold(goldBags));

// ===== EXERCICE 2 — ✅ Juste =====
// 💡 Ton instinct (« j'ai envie de déclarer directement dans la boucle ») était À MOITIÉ BON,
//   et c'est la règle la plus utile de cette salve :
//     - une variable qui doit SURVIVRE d'un tour à l'autre, ou servir APRÈS la boucle
//       (le total), se déclare AVANT la boucle
//     - une variable qui ne sert QUE pendant un tour (la valeur d'un objet), se déclare
//       DANS la boucle, avec const : une nouvelle est créée à chaque tour
//   Si tu déclares le total dans la boucle, il repart à 0 à chaque tour ET disparaît à la fin.
//   Mais la valeur de l'objet, elle, peut (et doit) naître dans la boucle
// 💡 itemTotal → itemValue (c'est la valeur d'UN objet, pas un total)

const merchantStock = [
  { name: "Épée", price: 150, quantity: 3 },
  { name: "Bouclier", price: 90, quantity: 0 },
  { name: "Arc", price: 120, quantity: 5 },
  { name: "Potion", price: 20, quantity: 12 },
  { name: "Armure", price: 400, quantity: 0 },
];

function calculateStockValue(items) {
  let stockValue = 0; // survit d'un tour à l'autre → avant la boucle
  for (const item of items) {
    const itemValue = item.price * item.quantity; // ne sert qu'à ce tour → dans la boucle
    stockValue = stockValue + itemValue;
  }
  return stockValue;
}

console.log(`La valeur totale du stock est de ${calculateStockValue(merchantStock)} pièces.`);

// ===== EXERCICE 3 — ✅ Parfait =====
// ✅ Le if / else imbriqué est très bien pensé : un objet est soit en stock, soit en rupture
// 💡 Détails :
//   - expansive → expensive (« cher »), déjà signalé la dernière fois ;)
//   - showMerchantStock n'affiche rien, elle contient un résumé → stockSummary

function evaluateStock(items) {
  let mostExpensiveItemName = "";
  let mostExpensiveItemPrice = 0;
  let outOfStockCount = 0;
  for (const item of items) {
    if (item.quantity > 0) {
      if (item.price > mostExpensiveItemPrice) {
        mostExpensiveItemPrice = item.price;
        mostExpensiveItemName = item.name;
      }
    } else {
      outOfStockCount++;
    }
  }
  return { mostExpensiveItemName: mostExpensiveItemName, outOfStockCount: outOfStockCount };
}

const stockSummary = evaluateStock(merchantStock);
console.log(
  `L'objet le plus cher en stock est : ${stockSummary.mostExpensiveItemName}. ${stockSummary.outOfStockCount} objets sont en rupture de stock.`,
);

// ===== EXERCICE 4 — ⚠️ Juste pour ce héros-là, mais pas pour les autres =====
// ✅ L'objet héros n'est PAS modifié, et tu l'as vérifié : le piège de la salve n°1 est évité !
// ❌ Ce qui n'allait pas :
//   - Le maximum est écrit en dur (100), alors qu'il est DANS l'objet : hero.maxHealth.
//     Avec un héros dont le maximum est 150, ta fonction le bloquerait à 100.
//     C'est la cousine du -50 du dragon : un nombre qui ne vient pas des données
//   - La potion de 20 PV n'a pas été testée (l'énoncé demandait les deux cas)
// 💡 À améliorer :
//   - healthAfter = healthAfter ne fait rien : c'est le if/else « placeholder » de l'exercice 10
//     d'hier. On part de la vraie valeur, et on ne corrige que si elle dépasse, sans else
//   - healthPotion → healAmount (c'est un nombre de PV, pas une potion)

function drinkHealthPotion(hero, healAmount) {
  let newHealth = hero.health + healAmount;
  if (newHealth > hero.maxHealth) {
    newHealth = hero.maxHealth;
  }
  return newHealth;
}

const thrall = { name: "Thrall", health: 70, maxHealth: 100 };
console.log(`Après une potion de 50 PV : ${drinkHealthPotion(thrall, 50)} PV`); // 100
console.log(`Après une potion de 20 PV : ${drinkHealthPotion(thrall, 20)} PV`); // 90
console.log(thrall); // inchangé

// ===== EXERCICE 5 — ✅ Résultats justes, mais une boucle infinie reste possible =====
// ✅ Prédiction juste (boucle infinie), et bonne idée : tester le cas dangereux AVANT la boucle,
//   puis tester null au moment d'afficher
// ❌ Ce qui n'allait pas :
//   - L'énoncé dit « AUTANT OU PLUS ». Ta condition est perWeekEarning > perWeekSpending :
//     si la guilde gagne EXACTEMENT ce qu'elle dépense (150 et 150), le trésor ne bouge
//     jamais… et c'est la boucle infinie. Il fallait >=
//   - Le cas null n'a pas été testé par un appel (il faut le voir marcher pour en être sûre)
// 💡 TA QUESTION : « Et si je voulais ne JAMAIS passer sous 500 ? » Ce n'est plus la même
//   question, donc plus la même condition :
//     - « au bout de combien de semaines PASSE-T-ON SOUS le seuil ? » → on continue tant
//       qu'on est au-dessus : while (treasury >= threshold) → 12 semaines, 480
//     - « combien de semaines PEUT-ON TENIR sans passer sous le seuil ? » → on ne fait la
//       semaine suivante que si son résultat reste au-dessus :
//       while (treasury - spending + earning >= threshold) → 11 semaines, 540
//       (et pas 520 : 1200 - 11 × 60 = 540)
//   C'est exactement la différence entre « atteindre » et « ne pas dépasser » de l'exercice 15
//   du diagnostic. Cette fois, tu as vu la nuance toute seule !
// 💡 À améliorer :
//   - else inutile après un return (le « else implicite » de la salve n°1)
//   - setBudget ne fixe rien, elle prévoit → forecastTreasury ; budget → treasury ;
//     limit → threshold ; limitStatus → treasuryForecast

function forecastTreasury(treasury, weeklySpending, weeklyEarning, threshold) {
  if (weeklyEarning >= weeklySpending) {
    return null;
  }
  let remainingTreasury = treasury;
  let weekCount = 0;
  while (remainingTreasury >= threshold) {
    remainingTreasury = remainingTreasury - weeklySpending + weeklyEarning;
    weekCount++;
  }
  return { weekCount: weekCount, remainingTreasury: remainingTreasury };
}

function describeForecast(forecast) {
  if (forecast === null) {
    return "La guilde gagne autant ou plus qu'elle ne dépense : le trésor ne passera jamais sous le seuil.";
  }
  return `Le trésor passe sous le seuil au bout de ${forecast.weekCount} semaines, avec ${forecast.remainingTreasury} pièces.`;
}

console.log(describeForecast(forecastTreasury(1200, 150, 90, 500))); // 12 semaines, 480
console.log(describeForecast(forecastTreasury(1200, 150, 150, 500))); // null

// ===== EXERCICE 6 — ✅ Parfait =====
// ✅ Le piège était la commande de 500, la plus grosse… mais annulée. Évité !
// ✅ L'oubli de order. devant isCancelled, corrigé « sans réfléchir » : la leçon du bonus
//   d'hier est rentrée
// 💡 Détail : ajouter l'unité à la plus grosse commande (« de 300 € »)

const orders = [
  { amount: 120, isCancelled: false },
  { amount: 45, isCancelled: true },
  { amount: 300, isCancelled: false },
  { amount: 80, isCancelled: false },
  { amount: 500, isCancelled: true },
];

function summarizeOrders(orderList) {
  let dailySales = 0;
  let cancelledOrderCount = 0;
  let biggestOrderAmount = 0;
  for (const order of orderList) {
    if (order.isCancelled) {
      cancelledOrderCount++;
    } else {
      dailySales = dailySales + order.amount;
      if (order.amount > biggestOrderAmount) {
        biggestOrderAmount = order.amount;
      }
    }
  }
  return {
    dailySales: dailySales,
    cancelledOrderCount: cancelledOrderCount,
    biggestOrderAmount: biggestOrderAmount,
  };
}

const orderSummary = summarizeOrders(orders);
console.log(
  `Chiffre d'affaires du jour : ${orderSummary.dailySales} €, plus grosse commande : ${orderSummary.biggestOrderAmount} €, ${orderSummary.cancelledOrderCount} commandes annulées.`,
);

// ===== EXERCICE 7 (DÉFI) — ✅ Réussi, avec une fragilité =====
// ✅ Le minimum avec condition : le schéma du maximum, retourné, appliqué seule. Bravo
// ❌ Ce qui n'allait pas :
//   - Le point de départ leastHealth = 100 est encore un nombre « magique ». Si tous les héros
//     vivants ont plus de 100 PV (un groupe de haut niveau, 120 et 150 PV), personne n'est
//     choisi et la phrase devient « Il faut soigner  en priorité ! »
//   - Le test demandé (Sylvanas à 10 PV) n'apparaît pas dans ton fichier
// 💡 Comment démarrer un minimum sans nombre magique ? Avec null, qui veut dire « je n'ai
//   encore trouvé personne ». Au premier héros vivant, on le prend d'office ; ensuite, on ne le
//   remplace que par un héros plus faible. (Il existe aussi la valeur Infinity, « plus grand que
//   tout nombre », mais null est plus parlant ici)
// 💡 players → heroes (ce sont des héros du groupe)

const party = [
  { name: "Thrall", health: 45, isAlive: true },
  { name: "Jaina", health: 0, isAlive: false },
  { name: "Sylvanas", health: 80, isAlive: true },
  { name: "Anduin", health: 30, isAlive: true },
];

function findHeroToHealFirst(heroes) {
  let weakestHero = null;
  for (const hero of heroes) {
    if (hero.isAlive && (weakestHero === null || hero.health < weakestHero.health)) {
      weakestHero = hero;
    }
  }
  return weakestHero === null ? null : weakestHero.name;
}

console.log(`Il faut soigner ${findHeroToHealFirst(party)} en priorité !`); // Anduin

const partyAfterAnotherFight = [
  { name: "Thrall", health: 45, isAlive: true },
  { name: "Sylvanas", health: 10, isAlive: true },
];
console.log(`Il faut soigner ${findHeroToHealFirst(partyAfterAnotherFight)} en priorité !`); // Sylvanas

const highLevelParty = [
  { name: "Thrall", health: 120, isAlive: true },
  { name: "Jaina", health: 150, isAlive: true },
];
console.log(`Il faut soigner ${findHeroToHealFirst(highLevelParty)} en priorité !`); // Thrall
