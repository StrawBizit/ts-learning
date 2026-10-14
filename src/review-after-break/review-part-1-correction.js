// ===================================================================
// CORRECTION — DIAGNOSTIC APRÈS LA PAUSE — PARTIE 1
// Pour chaque exercice : ce qui n'allait pas (❌), ce qui pouvait être mieux écrit (💡),
// puis l'exercice tel que je l'aurais écrit.
// Exécuter : node src/review-after-break/review-part-1-correction.js
// ===================================================================

// ===== EXERCICE 1 — ✅ Réussi =====
// 💡 À améliorer :
//   - Un booléen se nomme comme une question : isRare plutôt que rare
//   - Ta version au tableau [ ] : voir le mémo 12 du cours ({ } = objet, [ ] = liste)

const itemName = "Épée de givre";
const itemPrice = 150;
const isRare = true;

console.log(`L'${itemName} coûte ${itemPrice} pièces d'or.`);
console.log("L'" + itemName + " coûte " + itemPrice + " pièces d'or.");

// ===== EXERCICE 2 — ✅ Réussi =====
// Rien à redire.

const book = {
  title: "Dune",
  author: "Frank Herbert",
  pages: 412,
  isRead: false,
};

console.log(
  `${book.title}, le livre de ${book.author}, fait ${book.pages} pages.`,
);

// ===== EXERCICE 3 — ✅ Réussi (les 4 erreurs trouvées) =====
// 💡 Précisions :
//   - let au lieu de const : pas une erreur qui casse le code, une question de convention
//   - TRUE : JavaScript le lit comme le nom d'une variable qui n'existe pas → "TRUE is not defined"
//   - Noms en français (livre, titre) : imposés par l'énoncé, mais en anglais dans ton propre code

const duneBook = {
  title: "Dune",
  author: "Frank Herbert",
  isRead: true,
};

console.log(`J'ai lu ${duneBook.title} de ${duneBook.author}.`);

// ===== EXERCICE 4 — ⚠️ Résultat juste, mais la fonction n'a pas de paramètre =====
// ❌ Ce qui n'allait pas :
//   - La fonction doit RECEVOIR le prix : il faut un paramètre entre ses parenthèses
//   - Elle allait chercher excludingVAT à l'extérieur → elle ne savait calculer que le prix de 50
// 💡 À améliorer :
//   - Très bonne idée de nommer le taux de TVA. Une règle fixe peut rester hors de la fonction ;
//     la donnée qui change à chaque appel (le prix) arrive par le paramètre
//   - Conventions : camelCase (vatRate plutôt que VAT), nom de fonction = un verbe
//   - Le point après « € » n'était pas demandé

const vatRate = 0.2;

function calculatePriceIncludingVat(priceExcludingVat) {
  return priceExcludingVat * (1 + vatRate);
}

console.log(`Prix TTC : ${calculatePriceIncludingVat(50)} €`);

// ===== EXERCICE 5 — ✅ Réussi =====
// ❌ Ce qui n'allait pas :
//   - Le deuxième livre (Dune) n'était jamais affiché : l'énoncé demandait de tester les deux
// 💡 À améliorer :
//   - Une variable commence par une minuscule : dune, pas Dune
//   - Nom de fonction = un verbe : describeBook plutôt que fullSentence
//   - Le paramètre peut porter un nom simple (book) ; ici bookToDescribe, car book est déjà
//     utilisé plus haut dans ce fichier et deux noms identiques prêteraient à confusion

const dune = {
  title: "Dune",
  author: "Frank Herbert",
  pages: 412,
};

const laFaille = {
  title: "La Faille",
  author: "Franck Thilliez",
  pages: 615,
};

function describeBook(bookToDescribe) {
  return `${bookToDescribe.title}, de ${bookToDescribe.author}, fait ${bookToDescribe.pages} pages.`;
}

console.log(describeBook(dune));
console.log(describeBook(laFaille));

// ===== EXERCICE 6 — ✅ Réussi (avec effort, mais tout y est) =====
// 💡 À améliorer :
//   - let potion et let potionMajeure → const : ni l'un ni l'autre n'est réassigné
//   - myPotion → createPotion : le nom dit ce que fait la fonction
//   - namePotion / hpPotion : potion.namePotion répète « potion » deux fois → name / healAmount
//   - potionMajeure → nom en anglais : majorHealingPotion

function createPotion(name, healAmount) {
  const potion = {
    name: name,
    healAmount: healAmount,
  };
  return potion;
}

const majorHealingPotion = createPotion("Potion de soin majeure", 80);
console.log(
  `La ${majorHealingPotion.name} rend ${majorHealingPotion.healAmount} PV.`,
);

// ===== EXERCICE 7 — ⚠️ Conditions parfaites, mais la fonction n'a pas de paramètre =====
// ❌ Ce qui n'allait pas :
//   - Même piège qu'à l'exercice 4 : la note était lue dans une variable extérieure (grade = 15)
//   - Le 15 passé à l'appel était ignoré : gradeRating(8) renvoyait « Bien »
// 💡 À améliorer :
//   - Nom de fonction = un verbe : getGradeRating
//   - Tester une valeur par appréciation pour prouver que la fonction marche

function getGradeRating(grade) {
  if (grade >= 16) {
    return "Excellent";
  } else if (grade >= 12) {
    return "Bien";
  } else if (grade >= 10) {
    return "Passable";
  } else {
    return "Insuffisant";
  }
}

console.log(getGradeRating(17)); // Excellent
console.log(getGradeRating(13)); // Bien
console.log(getGradeRating(10)); // Passable
console.log(getGradeRating(8)); // Insuffisant

// ===== EXERCICE 8 — ✅ Parfait =====
// 💡 À améliorer :
//   - La condition vaut déjà true ou false : on peut la renvoyer directement, sans if / else
//   - Nom un peu plus précis : canEnterDungeon

const playerOne = { level: 47, hasKey: true, isBanned: false };
const playerTwo = { level: 51, hasKey: true, isBanned: false };
const playerThree = { level: 52, hasKey: true, isBanned: true };

function canEnterDungeon(player) {
  return player.level >= 50 && player.hasKey && !player.isBanned;
}

console.log(
  `Le joueur 1 peut-il entrer dans le donjon ? ${canEnterDungeon(playerOne)}`,
);
console.log(
  `Le joueur 2 peut-il entrer dans le donjon ? ${canEnterDungeon(playerTwo)}`,
);
console.log(
  `Le joueur 3 peut-il entrer dans le donjon ? ${canEnterDungeon(playerThree)}`,
);

// ===== EXERCICE 9 — Prédictions =====
// CODE A — Affiche : 8, puis undefined
// ❌ Ce qui n'allait pas dans ta prédiction :
//   - Tu pensais que r valait 8. Or une variable reçoit ce qui est RENVOYÉ, pas ce qui est AFFICHÉ
//   - console.log affiche 8… puis renvoie undefined. Le return transmet donc undefined à r
//   - ✅ Bien vu : tu avais repéré que le double console.log posait problème
//
// CODE B — Affiche : 1
// ❌ Ce qui n'allait pas dans ta prédiction :
//   - Le return est À L'INTÉRIEUR de la boucle : au 1er tour, total = 1, puis return
//     → la fonction s'arrête immédiatement et renvoie 1. Les tours 2 à 4 n'ont jamais lieu
//   - ✅ Ta trace tour par tour était parfaite : avec le return APRÈS la boucle, la réponse serait 10

// ===== EXERCICE 10 — ❌ À retravailler =====
// ❌ Ce qui n'allait pas :
//   - On ajoutait 1 au lieu d'ajouter i : on comptait les tours au lieu de faire la somme
//   - x = x + 1 ET x++ : deux façons d'écrire la même chose → +2 à chaque tour
//   - Le total démarrait à 1 au lieu de 0
//   - for (i = 1; ...) sans let → variable globale cachée (même mécanisme que ton tableau [ ])
// 💡 À améliorer :
//   - Des noms qui disent ce qu'ils contiennent : total plutôt que x, sumUpTo plutôt que sum
//   - Le calcul juste, tu l'avais écrit toi-même dans ta trace du code B : total = total + i

function sumUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = total + i;
  }
  return total;
}

console.log(sumUpTo(4)); // 10

// ===== EXERCICE 11 — ✅ Logique juste =====
// ❌ Ce qui n'allait pas :
//   - for (i = 1; ...) sans let → variable globale cachée
//   - L'affichage demandé était la phrase complète, pas seulement le nombre
// 💡 À améliorer :
//   - countEvenNumbers : le nom complet se lit mieux que countEven

function countEvenNumbers(max) {
  let evenCount = 0;
  for (let i = 1; i <= max; i++) {
    if (i % 2 === 0) {
      evenCount++;
    }
  }
  return evenCount;
}

const max = 10;
console.log(`Il y a ${countEvenNumbers(max)} nombres pairs entre 1 et ${max}.`);
