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
const rare = true;

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
const excludingVAT = 50;
const VAT = 0.2;

function includingVAT() {
  return excludingVAT * (1 + VAT);
}

console.log(`Prix TTC : ${includingVAT()} €.`);

// COMMENTAIRE : Des difficultés ici car je ne savais plus comment retourner le résultat.
// Je me souvenais d'un "return" mais je le mettais sur la ligne du dessous et pas sur la ligne qui faisait le calcul.
// J'ai du relire le cours pour retrouver au mettre le return.

// ===== EXERCICE 5 =====
// Écris une fonction qui reçoit un objet livre (comme celui de l'exercice 2)
// et renvoie la phrase : Dune, de Frank Herbert, fait 412 pages.
// Teste-la avec deux livres différents.

const Dune = {
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

function fullSentence(myBook) {
  return `${myBook.title}, de ${myBook.author}, fait ${myBook.pages} pages.`;
}

console.log(fullSentence(laFaille));

// ===== EXERCICE 6 =====
// Écris une fonction qui reçoit un nom de potion et un nombre de points de vie soignés,
// et qui renvoie un objet potion.
// Crée ensuite une « Potion de soin majeure » qui soigne 80 PV,
// puis affiche : La Potion de soin majeure rend 80 PV.

// ===== LEÇON 3 — Conditions =====

// ===== EXERCICE 7 =====
// Écris une fonction qui reçoit une note sur 20 et renvoie une appréciation :
// « Excellent » à partir de 16, « Bien » à partir de 12, « Passable » à partir de 10,
// « Insuffisant » en dessous.

// ===== EXERCICE 8 =====
// Écris une fonction qui reçoit un objet joueur (niveau, possède la clé ou non,
// est banni ou non) et renvoie true si le joueur peut entrer dans le donjon, false sinon.
// Il peut entrer s'il est au moins niveau 50, qu'il a la clé et qu'il n'est pas banni.

// ===== LEÇON 4 — Boucles =====

// ===== EXERCICE 9 — PRÉDICTION : NE PAS EXÉCUTER AVANT D'AVOIR RÉPONDU =====
// Dis ce qu'affiche chacun de ces deux codes, et explique pourquoi.
// Écris ta réponse en commentaire. Ensuite seulement, tu peux dé-commenter pour vérifier.
//
// Code A
// function test(x) {
//   return console.log(x * 2);
// }
// let r = test(4);
// console.log(r);
//
// Code B
// function somme(max) {
//   let total = 0;
//   for (let i = 1; i <= max; i++) {
//     total = total + i;
//     return total;
//   }
// }
// console.log(somme(4));

// ===== EXERCICE 10 =====
// Écris une fonction qui reçoit un nombre n et renvoie la somme de tous les entiers
// de 1 à n. Par exemple, pour 4, elle renvoie 10.

// ===== EXERCICE 11 =====
// Écris une fonction qui reçoit un nombre max et renvoie combien il y a de nombres pairs
// entre 1 et max. Utilise-la pour afficher : Il y a 5 nombres pairs entre 1 et 10.
