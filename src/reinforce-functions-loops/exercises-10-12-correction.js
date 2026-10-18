// ===================================================================
// CORRECTION — SALVE CIBLÉE — EXERCICES 10 À 12
// Pour chaque exercice : ce qui n'allait pas (❌), ce qui pouvait être mieux écrit (💡),
// puis l'exercice tel que je l'aurais écrit.
// Exécuter : node src/reinforce-functions-loops/exercises-10-12-correction.js
// ===================================================================

// ===== EXERCICE 10 — ✅ Les 5 résultats sont justes, et la spec est parfaitement lue =====
// ✅ Tous les pièges de l'énoncé évités : le seuil des 30 CHF testé sur le montant AVANT remise,
//   « strictement supérieur » (> et pas >=), la remise membre appliquée en premier
// ✅ L'erreur « memberTotal is not defined » : tu as reconnu toute seule le problème de portée
//   d'hier (variable déclarée dans le if) et tu l'as résolu correctement
// ✅ Le test « pas de code » en omettant le 3e argument : c'est juste, coupon vaut alors
//   undefined (leçon 2.5). Passer null explicitement serait plus lisible
// 💡 Ton malaise avec les « valeurs placeholder » est JUSTIFIÉ, et voici pourquoi :
//   ce n'est pas le fait de déclarer avant le if qui est maladroit, c'est que ta valeur de
//   départ est ensuite réécrite dans les DEUX branches (if ET else). La valeur de départ ne
//   sert donc à rien, et le else refait ce qui était déjà fait.
//   La solution : partir de la VRAIE valeur de départ (le montant du panier), puis
//   n'appliquer que les modifications nécessaires. Plus de else, plus de placeholder,
//   et une seule variable qui « se transforme » étape par étape, dans l'ordre de la spec
// 💡 À améliorer :
//   - isMember === true → isMember
//   - Deux variables (memberTotal, withCouponTotal) pour un seul prix qui évolue → une seule
//   - calculateBasket → calculateFinalPrice ; total → basketAmount (« total » laisse penser
//     que c'est déjà le résultat)
//   - Afficher une phrase avec l'unité

function calculateFinalPrice(basketAmount, isMember, promoCode) {
  const memberDiscountRate = 0.1;
  const welcomeDiscount = 5;

  let finalPrice = basketAmount;
  if (isMember) {
    finalPrice = finalPrice * (1 - memberDiscountRate);
  }
  if (promoCode === "BIENVENUE" && basketAmount > 30) {
    finalPrice = finalPrice - welcomeDiscount;
  }
  return finalPrice;
}

console.log(`Prix final : ${calculateFinalPrice(50, true, null)} CHF`); // 45
console.log(`Prix final : ${calculateFinalPrice(50, false, "BIENVENUE")} CHF`); // 45
console.log(`Prix final : ${calculateFinalPrice(50, true, "BIENVENUE")} CHF`); // 40
console.log(`Prix final : ${calculateFinalPrice(30, false, "BIENVENUE")} CHF`); // 30
console.log(`Prix final : ${calculateFinalPrice(50, false, "")} CHF`); // 50

// ===== EXERCICE 11 — ✅ Parfait =====
// ✅ Tu as reconnu TOUTE SEULE que c'était un cas de ternaire, parce que le if te semblait
//   « long et fastidieux pour rien ». C'est exactement le bon raisonnement
// 💡 À améliorer (détails) :
//   - checkPlayerOnline : « check » fait penser à une fonction qui renvoie true / false.
//     Ici elle renvoie une phrase → describePlayerStatus
//   - onlineMessage contient « en ligne » OU « hors ligne » → statusLabel
//   - Pour le ternaire, de simples guillemets suffisent quand il n'y a pas de ${}

function describePlayerStatus(player) {
  const statusLabel = player.isOnline ? "en ligne" : "hors ligne";
  return `${player.name} est ${statusLabel}.`;
}

const bizit = { name: "Bizit", isOnline: true };
const targok = { name: "Targok", isOnline: false };

console.log(describePlayerStatus(bizit));
console.log(describePlayerStatus(targok));

// ===== EXERCICE 12 — ⚠️ Tu n'étais pas loin : à 4 mots près, c'était juste =====
// ✅ Regarde tout ce qui est JUSTE dans ta version :
//   - la boucle for...of AVEC const (l'oubli d'hier est corrigé !)
//   - le schéma du maximum avec condition, vu hier dans la correction de l'exercice 7,
//     appliqué du premier coup, avec la bonne condition (&& !disqualifié)
//   - le compteur des joueurs en lice
//   - le renvoi d'un objet, rangé dans une variable, puis lu dans la phrase finale
// ❌ Le seul problème : score, isDisqualified et name ne sont PAS des variables.
//   Ce sont des PROPRIÉTÉS de chaque objet joueur. Pour les atteindre, il faut passer par
//   l'objet : player.score, player.isDisqualified, player.name. Exactement comme book.title
//   à la leçon 1. Écrit seul, isDisqualified est lu comme le nom d'une variable… qui
//   n'existe pas, d'où « isDisqualified is not defined ». Le message était littéral !
// 💡 Bonus de compréhension : pourquoi l'erreur porte sur isDisqualified, et pas sur score
//   qui est pourtant écrit AVANT dans la condition ? Parce qu'à l'exercice 7, ta boucle
//   for (score of scores) sans const a créé une variable globale cachée score… qui vaut
//   encore 10 ! Ici, JavaScript l'a trouvée et l'a utilisée sans rien dire. C'est la
//   démonstration parfaite du danger des variables non déclarées : elles « fuient » d'un
//   exercice à l'autre et faussent des calculs qui n'ont rien à voir
// 💡 À améliorer :
//   - showWinner n'affiche rien, elle calcule → findTournamentWinner
//   - playerCount → activePlayerCount (on ne compte pas tous les joueurs)
//   - Le paramètre porte le même nom que le tableau extérieur → participants

const players = [
  { name: "Thrall", score: 84, isDisqualified: false },
  { name: "Jaina", score: 91, isDisqualified: true },
  { name: "Sylvanas", score: 88, isDisqualified: false },
  { name: "Anduin", score: 79, isDisqualified: false },
];

function findTournamentWinner(participants) {
  let activePlayerCount = 0;
  let winnerName = "";
  let winnerScore = 0;
  for (const player of participants) {
    if (!player.isDisqualified) {
      activePlayerCount++;
      if (player.score > winnerScore) {
        winnerScore = player.score;
        winnerName = player.name;
      }
    }
  }
  return { winnerName: winnerName, activePlayerCount: activePlayerCount };
}

const tournamentResult = findTournamentWinner(players);
console.log(
  `${tournamentResult.winnerName} remporte le tournoi parmi ${tournamentResult.activePlayerCount} joueurs en lice.`,
);
