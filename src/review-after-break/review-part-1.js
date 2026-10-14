// ===================================================================
// DIAGNOSTIC APRÈS LA PAUSE — PARTIE 1 (JavaScript, leçons 1 à 4)
// Exécuter : node src/review-after-break/review-part-1.js
// Note en commentaire comment tu y es arrivée (facile, galère, tentative...)
// ===================================================================

// ===== LEÇON 1 — Variables, texte, objets =====

// ===== EXERCICE 1 =====
// Crée trois variables pour décrire un objet de jeu : son nom (« Épée de givre »),
// son prix (150) et le fait qu'il soit rare (il l'est).
// Affiche ensuite la phrase : L'Épée de givre coûte 150 pièces d'or.
// en utilisant tes variables. Fais-le deux fois : une fois avec les backticks,
// une fois avec la concaténation.
const name = "Épée de Givre";
const price = 150;
const isRare = true;

console.log(`L'${name} coûte ${price} pièces d'or.`);
console.log("L'" + name + " coûte " + price + " pièces d'or.");

// COMMENTAIRE  : aucun problème particulier ici (si ce n'est que je voulais me compliquer la tâche et
// déclarer le type de valeur attendue et que je ne me rappelle plus comment en fait car je ne me souviens
// que de comment on fait en TS et on est pas en TS ici)

// ===== EXERCICE 2 =====
// Crée un objet qui représente un livre : titre « Dune », auteur « Frank Herbert »,
// 412 pages, et le fait que tu l'aies lu ou non.
// Affiche une phrase qui utilise au moins trois de ses propriétés.
const book = {
  title: "Dune",
  author: "Frank Herbert",
  pages: 412,
  isRead: false,
};

console.log(
  `${book.title}, le livre de ${book.author} fait ${book.pages} pages.`,
);

// COMMENTAIRE : j'avais mis au départ des [] au lieu des {} dans la déclaration objet ce qui me faussait tout...

// ===== EXERCICE 3 =====
// Ce code contient des erreurs. Trouve-les toutes, explique chacune en commentaire,
// puis réécris le code corrigé en dessous (laisse le code fautif en commentaire).
//
// let livre = {
//   titre = "Dune";
//   auteur = "Frank Herbert";
//   lu: TRUE
// };
// console.log("J'ai lu ${livre.titre} de ${livre.auteur}.");

// COMMENTAIRE :
// - "const" au lieu de "let"
// - pas de signe "=" dans chaque propriété du livre mais des ":"
// - pas ";" pour finir chaque propriété mais des ","
// - doute : je sais pas si TRUE en full CAPS est accepté ou non
// - dans le console log, il ne faut pas mettre de "" mais des ``
// (ou alors il faut utiliser la concaténation avec des + et non ${}, là c'est un mix des 2)

const livre = {
  titre: "Dune",
  auteur: "Frank Herbert",
  lu: true,
};

console.log(`J'ai lu ${livre.titre} de ${livre.auteur}.`);

// COMMENTAIRE APRES EXECUTION : a priori TRUE en full CAPS n'est pas accepté car le code ne s'exécutait pas.

// ===== LEÇON 2 — Fonctions =====

// ===== EXERCICE 4 =====
// Écris une fonction qui reçoit un prix hors taxes et renvoie le prix TTC (TVA de 20 %).
// Utilise-la pour un prix de 50, puis affiche : Prix TTC : 60 €
const vatRate = 0.2;

function calculatePriceIncludingVat(priceExcludingVat) {
  return priceExcludingVat * (1 + vatRate);
}

console.log(`Prix TTC : ${calculatePriceIncludingVat(50)} €.`);

// COMMENTAIRE : Des difficultés ici car je ne savais plus comment retourner le résultat.
// Je me souvenais d'un "return" mais je le mettais sur la ligne du dessous et pas sur la ligne qui faisait le calcul.
// J'ai du relire le cours pour retrouver au mettre le return.

// ===== EXERCICE 5 =====
// Écris une fonction qui reçoit un objet livre (comme celui de l'exercice 2)
// et renvoie la phrase : Dune, de Frank Herbert, fait 412 pages.
// Teste-la avec deux livres différents.

const dune = {
  title: "Dune",
  author: "Frank Herbert",
  pages: 412,
  isRead: false,
};

const laFaille = {
  title: "La Faille",
  author: "Franck Thilliez",
  pages: 615,
  isRead: true,
};

function describeBook(myBook) {
  return `${myBook.title}, de ${myBook.author}, fait ${myBook.pages} pages.`;
}

console.log(describeBook(laFaille));

// COMMENTAIRE : J'ai complètement dû m'appuyer sur le cours pour pouvoir refaire ici.
// Sans le cours, j'étais partie pour mettre le console.log directement dans la fonction
// Sans le cours, je ne me rappelais plus qu'on devait mettre un nom () dans la fonction
// Et pas sûre que j'aurais retrouver l'affichage console.log(myFunction(objectName))

// ===== EXERCICE 6 =====
// Écris une fonction qui reçoit un nom de potion et un nombre de points de vie soignés,
// et qui renvoie un objet potion.
// Crée ensuite une « Potion de soin majeure » qui soigne 80 PV,
// puis affiche : La Potion de soin majeure rend 80 PV.

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

// COMMENTAIRE : Pas du tout maîtrisé ! Même avec le cours, j'ai eu du mal (même si au final j'ai fini par y arriver, même avec beaucoup de mal !) !

// ===== LEÇON 3 — Conditions =====

// ===== EXERCICE 7 =====
// Écris une fonction qui reçoit une note sur 20 et renvoie une appréciation :
// « Excellent » à partir de 16, « Bien » à partir de 12, « Passable » à partir de 10,
// « Insuffisant » en dessous.

function gradeRating(grade) {
  if (grade >= 16) {
    return "Excellent !";
  } else if (grade >= 12) {
    return "Bien";
  } else if (grade >= 10) {
    return "Passable";
  } else {
    return "Insuffisant";
  }
}

console.log(gradeRating(15));

// COMMENTAIRE : étonnamment facile ici ! Pas trop eu besoin de réfléchir et encore moins d'avoir recours à mon cours !

// ===== EXERCICE 8 =====
// Écris une fonction qui reçoit un objet joueur (niveau, possède la clé ou non,
// est banni ou non) et renvoie true si le joueur peut entrer dans le donjon, false sinon.
// Il peut entrer s'il est au moins niveau 50, qu'il a la clé et qu'il n'est pas banni.

const playerOne = {
  level: 47,
  hasKey: true,
  isBanned: false,
};

const playerTwo = {
  level: 51,
  hasKey: true,
  isBanned: false,
};

const playerThree = {
  level: 52,
  hasKey: true,
  isBanned: true,
};

function canEnter(player) {
  if (player.level >= 50 && player.hasKey && !player.isBanned) {
    return true;
  } else {
    return false;
  }
}

console.log(
  `Le joueur 1 peut-il entrer dans le donjon ? ${canEnter(playerOne)}`,
);

console.log(
  `Le joueur 2 peut-il entrer dans le donjon ? ${canEnter(playerTwo)}`,
);

console.log(
  `Le joueur 3 peut-il entrer dans le donjon ? ${canEnter(playerThree)}`,
);

// COMMENTAIRE : Pareil, plutôt facile ici, je me suis même rappelée qu'on avait pas besoin de spécifier les booléen :
// si propriété tout court sans test logique, ça veut dire égal true si !propriété (toujours tout court, sans test logique), ça veut dire égale false

// ===== LEÇON 4 — Boucles =====

// ===== EXERCICE 9 =====
// PRÉDICTION : NE PAS EXÉCUTER AVANT D'AVOIR RÉPONDU
// Dis ce qu'affiche chacun de ces deux codes, et explique pourquoi.
// Écris ta réponse en commentaire. Ensuite seulement, tu peux dé-commenter pour vérifier.
//
// Code A
//function test(x) {
// return console.log(x * 2);
//}
//let r = test(4);
//console.log(r);
//
// Code B
//function somme(max) {
// let total = 0;
//for (let i = 1; i <= max; i++) {
// total = total + i;
// return total;
// }
//}
//console.log(somme(4));

// CODE A Réponse AVANT exécuter (et sans revoir le cours) : r = console.log(4*2) = console.log (8) et donc r affiche 8 ; mais le fait de mettre à nouveau un console.log pour afficher r
// qui lui-même contient déjà un console.log dans sa fonction, ça créé un problème d'une manière ou d'une autre et donc peut-être que ça afficherait :
// "console.log(8)" ? COMMENTAIRE APRES exécuter : j'avais bien repéré le double console.log problématique mais pas identifié que ça conduirait à un "undefined".

// CODE B Réponse AVANT exécuter (et sans revoir le cours) : Puisque le paramètre de la fonction somme prend "max" en paramètre et que le console.log
// affiche somme(4), on ne peut imaginer que 4 = max. il s'agit d'une boucle où tant que i (qui vaut 1 au départ) est inférieur ou égal à 4 (dans cet exemple),
// on fait le calcul dans la boucle. Elle s'arrête lorsque i > 4 sachant que i s'incrémente de 1 à chaque boucle.
// Puisque le paramètre de la fonction somme prend "max" en paramètre et que le console.log affiche somme(4), on ne peut imaginer que 4 = max
// Boucle 1 : i = 1 (et est donc inférieur ou égal à 4) donc total = 0 + 1 donc total = 1
// Boucle 2 : i = 2 (et est donc inférieur ou égal à 4) donc total = 1 + 2 donc total = 3
// Boucle 3 : i = 3 (et est donc inférieur ou égal à 4) donc total = 3 + 3 donc total = 6
// Boucle 4 : i = 4 (et est donc inférieur ou égal à 4) donc total = 6 + 4 donc total = 10
// Boucle 5 : i = 5 (et est donc supérieur à 4) donc boucle terminée.
// Le résultat de la fonction pour somme(4) est total = 10 donc pour moi console.log doit afficher 10 ?
// COMMENTAIRE APRES exécuter : Je ne me suis pas aidée du cours et j'ai d'ailleurs faux.
// Le résultat semble montrer que la boucle n'est effectuée qu'une seule fois, mais je ne comprends pas pourquoi?

// ===== EXERCICE 10 =====
// Écris une fonction qui reçoit un nombre n et renvoie la somme de tous les entiers
// de 1 à n. Par exemple, pour 4, elle renvoie 10.

function sumUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = total + i;
  }
  return total;
}

console.log(sumUpTo(4));

// COMMENTAIRE : Je tatillonne mais j'y arrive pas

// ===== EXERCICE 11 =====
// Écris une fonction qui reçoit un nombre max et renvoie combien il y a de nombres pairs
// entre 1 et max. Utilise-la pour afficher : Il y a 5 nombres pairs entre 1 et 10.

function countEven(max) {
  let evenCount = 0;
  for (let i = 1; i <= max; i++) {
    if (i % 2 === 0) {
      evenCount++;
    }
  }
  return evenCount;
}

console.log(countEven(10));

// COMMENTAIRE : J'ai réussi à m'aidant de mon cours pour savoir à quel endroit on devait tester la condition paire
// et quelle était la syntaxe exact du modulo (je me rappelais du modulo mais plus exactement). Mais en tatillonnant, j'ai réussi à faire l'exercice !
