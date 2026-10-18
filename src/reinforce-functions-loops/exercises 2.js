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
// function sumGold(bags) {
//   total = 0;
//   for (bag of bags) {
//     total = total + bag;
//   }
//   return total;
// }
//
// function describeLastBag() {
//   return `Le dernier sac contenait ${bag} pièces d'or.`;
// }
//
// console.log(sumGold([10, 25, 40]));
// console.log(describeLastBag());

// ===== EXERCICE 2 =====
// Voici l'inventaire d'un marchand :
// const merchantStock = [
//   { name: "Épée", price: 150, quantity: 3 },
//   { name: "Bouclier", price: 90, quantity: 0 },
//   { name: "Arc", price: 120, quantity: 5 },
//   { name: "Potion", price: 20, quantity: 12 },
//   { name: "Armure", price: 400, quantity: 0 },
// ];
// Écris une fonction qui reçoit un inventaire et renvoie la valeur totale du stock
// (pour chaque objet : son prix multiplié par la quantité disponible).
// Affiche une phrase avec le résultat.                                   [1290]

// ===== EXERCICE 3 =====
// Avec le même inventaire, écris une fonction qui permet d'afficher :
//   - le nom de l'objet le plus cher PARMI CEUX QUI SONT EN STOCK
//   - le nombre d'objets en rupture de stock
// Affiche une phrase avec les deux informations.                [Épée, 2]

// ===== EXERCICE 4 =====
// Un héros : { name: "Thrall", health: 70, maxHealth: 100 }
// Écris une fonction qui reçoit un héros et le nombre de PV qu'une potion soigne,
// et qui renvoie les PV du héros après avoir bu la potion.
// Les PV ne peuvent jamais dépasser le maximum du héros.
// Teste avec une potion de 50 PV puis une potion de 20 PV.               [100, puis 90]
// Après tes appels, vérifie par un affichage que l'objet héros n'a pas été modifié.

// ===== EXERCICE 5 =====
// Une guilde possède 1200 pièces dans son trésor. Chaque semaine, elle dépense 150 pièces
// et en gagne 90. Écris une fonction qui reçoit le trésor de départ, les dépenses par semaine,
// les gains par semaine et un seuil, et qui permet d'afficher :
//   - au bout de combien de semaines le trésor passe sous le seuil
//   - le montant du trésor à ce moment-là
// Teste avec un seuil de 500 pièces.                                     [12 semaines, 480]
//
// Ensuite : que se passerait-il si la guilde gagnait autant ou plus qu'elle ne dépense ?
// Écris ta prédiction en commentaire AVANT d'essayer (et garde Ctrl + C sous la main).
// Puis modifie ta fonction pour qu'elle renvoie null dans ce cas, et affiche une phrase
// adaptée quand le résultat est null.

// ===== EXERCICE 6 =====
// Voici les commandes du jour d'une boutique :
// const orders = [
//   { amount: 120, isCancelled: false },
//   { amount: 45, isCancelled: true },
//   { amount: 300, isCancelled: false },
//   { amount: 80, isCancelled: false },
//   { amount: 500, isCancelled: true },
// ];
// Écris une fonction qui reçoit une liste de commandes et permet d'afficher :
//   - le chiffre d'affaires du jour (la somme des commandes NON annulées)
//   - le nombre de commandes annulées
//   - le montant de la plus grosse commande non annulée
// Affiche une phrase avec les trois informations.                    [500, 2, 300]

// ===================================================================
// DÉFI
// ===================================================================

// ===== EXERCICE 7 =====
// Voici l'état de ton groupe après un combat :
// const party = [
//   { name: "Thrall", health: 45, isAlive: true },
//   { name: "Jaina", health: 0, isAlive: false },
//   { name: "Sylvanas", health: 80, isAlive: true },
//   { name: "Anduin", health: 30, isAlive: true },
// ];
// Écris une fonction qui reçoit le groupe et renvoie le nom du héros VIVANT qui a le moins
// de PV (c'est lui qu'on soigne en premier).                                  [Anduin]
// Vérifie aussi que ta fonction donne la bonne réponse si on change les PV des héros
// (par exemple, si Sylvanas tombe à 10 PV).
