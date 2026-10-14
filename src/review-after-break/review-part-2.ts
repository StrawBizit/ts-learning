// ===================================================================
// DIAGNOSTIC APRÈS LA PAUSE — PARTIE 2 (TypeScript, leçons 5 et 6)
// Exécuter : npx tsx src/review-after-break/review-part-2.ts
// Note en commentaire comment tu y es arrivée (facile, galère, tentative...)
// ===================================================================

// Ligne technique, ne pas supprimer : elle isole les variables de ce fichier.
// Sans elle, TypeScript signalerait une erreur si tu réutilises un nom de variable
// déjà déclaré dans un autre fichier du projet (par exemple dans la leçon 6).
export {};

// ===== EXERCICE 12 =====
// Déclare, avec un type explicite pour chacune, quatre variables décrivant un article :
// son nom (« Clavier mécanique »), son prix (89.90 CHF), sa disponibilité (il est disponible)
// et un code promo qui peut être un texte ou ne pas exister. Pour l'instant, il n'existe pas.
// Affiche une phrase qui utilise les quatre.

const name: string = "Clavier Mécanique";
const price: number = 89.9;
const isAvailable: boolean = true;
const discountCode: string | null = "";

function beAvailable() {
  if (isAvailable) {
    return "disponible";
  } else {
    return "indisponible";
  }
}

function haveDiscountCode() {
  if (discountCode !== "") {
    return ` avec le code promo suivant : ${discountCode}.`;
  } else {
    return `. Malheureusement il ne dipose actuellement pas d'un code promo.`;
  }
}

console.log(
  `Ce ${name} est actuellement ${beAvailable()} au prix de ${price} CHF${haveDiscountCode()} `,
);

// COMMENTAIRE : Facile, juste pour le "ou" lorsqu'une variable à plusieurs types, j'avais mis || au lieu de |.
// C'est un bonus mais comme il fallait afficher les 4, j'en ai profité pour faire une fonction avec if pour afficher
// proprement les 2 boolean (parce que avoir une phrase qui retourne false or true, c'est pas super propre) et ça me fait pratiquer
//je trouve ça un peu dommage/lourd de devoir faire une fonction juste pour transformer le true et le false en des vrais mots,
// dis moi si y'a un moyen plus propre de le faire?

// ===== EXERCICE 13 — PRÉDICTION : RÉPONDS AVANT DE DÉ-COMMENTER =====
// Pour chaque ligne marquée d'une lettre, TypeScript signale-t-il une erreur ?
// Si oui, pourquoi ? Écris tes réponses en commentaire.
// Ensuite seulement, dé-commente le code pour vérifier (Error Lens affichera les erreurs),
// puis remets en commentaire les lignes fautives pour que le reste du fichier s'exécute.
//
// let city = "Nancy";
// city = "Lyon"; // A
// city = 54; // B
// const birthYear = 1988;
// birthYear = 1990; // C
// let score: number | null = null;
// score = 12; // D
// score = "douze"; // E

// COMMENTAIRE avant execute :
// A : pas d'erreur car on redéfini avec le même type que la variable déclarée
// B : erreur car on redéfini pas avec le même type que la variable déclarée
// C : erreur car on essaye de redéfinir une variable de type constante
// D :  pas d'erreur car la variable peut être de type nombre ou null
// E : erreur car "douze" est un type string (chaine de caractère entre guillemet)
// COMMENTAIRE après execute : j'avais tout juste, pas de difficulté ici :)

// ===== EXERCICE 14 =====
// Voici les prix d'un panier :
const prices: number[] = [12.5, 34, 8.9, 21, 45.5, 3.2];
// Avec une boucle for...of, calcule le total du panier et le nombre d'articles
// qui coûtent plus de 20 CHF. Affiche les deux résultats.

function calculateBasket() {
  let expansiveItems = 0;
  let totalBasket = 0;
  for (const price of prices) {
    totalBasket = totalBasket + price;
    if (price > 20) {
      expansiveItems = expansiveItems++;
    }
  }
  return totalBasket;
  return expansiveItems;
}

//console.log(
//  `Total panier : ${totalBasket} // Nombre d'articles de plus de 20 CHF : ${expansiveItems} `,
//);

// COMMENTAIRE : je sais que ça ne marche pas mais je ne sais pas pourquoi : là où je bloque le plus c'est comment mettre dans mon console.log mes 2 variables calculées dans la fonction?
// j'ai commenté le console.log en erreur pour continuer à tester le reste.

// ===== EXERCICE 15 =====
// Tu mets de côté 150 CHF par mois, en partant de zéro. Ton objectif est d'atteindre 2000 CHF.
// Avec une boucle while, calcule combien de mois il te faut pour atteindre ou dépasser
// cet objectif. Affiche le nombre de mois et le montant final épargné.
const perMonth = 150;
const objective = 2000;
let month = 0;
let amount = 0;

while (amount + perMonth < objective) {
  amount = amount + perMonth;
  month = month + 1;
}

console.log(
  `Sans dépasser 2000 CHF, il m'aura fallu ${month} mois pour atteindre ${amount}`,
);

// COMMENTAIRE : pas de difficulté particulière ici.

// ===== EXERCICE 16 — PRÉDICTION : RÉPONDS AVANT D'EXÉCUTER =====
// Pour chacune de ces valeurs, écris en commentaire si elle est truthy ou falsy :
// 0, "0", "", " " (un espace), [], null, undefined, 42, "false"
// Vérifie ensuite si tu veux, et note combien tu en avais trouvé.
// 0 : falsy
// "0" : truthy
// "" : truthy
// [un espace] : truthy
// [] : truthy
// null : falsy
// undefined : falsy
// 42 : truthy
// "false" : truthy
// J'ai vérifié après coup dans le cours et je me suis trompée sur "" qui est falsy et que j'ai noté truthy (j'étais pas sûre de moi pour celui là).
// J'étais plus absolument sûre non plus pour l'espace  mais les autres j'étais très confiante. Ca, c'est juste la mémoire/manque de pratique mais ça revient vite.

// ===== EXERCICE 17 =====
// Règle métier : une commande bénéficie de la livraison gratuite si son montant atteint
// 100 CHF, ou si le client est premium et que le montant atteint 50 CHF.
// Une commande annulée n'en bénéficie jamais, quel que soit le reste.
// Pose les variables nécessaires, calcule le résultat dans une variable booléenne,
// et teste trois situations :
//   - une qui donne true grâce au montant seul
//   - une qui donne true grâce au statut premium
//   - une qui donne false parce que la commande est annulée

function decideFreeDelivery(total: number, status: string, customer: string) {
  if (
    status !== "Cancelled" &&
    (total >= 100 || (total >= 50 && customer == "Premium"))
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(decideFreeDelivery(150, "Pending", "Basic"));
console.log(decideFreeDelivery(75, "in Preparation", "Premium"));
console.log(decideFreeDelivery(215, "Cancelled", "Basic"));

// Pour mettre les types dans les paramètres de la fonction, j'ai du m'appuyer sur mon cours car je ne savais pas/plus comment on faisait
// J'en profite pour dire que c'est pareil pour mettre les types pour les objets, je ne me souviens plus comment on fait (même si c'est pas le sujet ici)
// Parce que j'ai déjà pris en compte ton retour sur la part 1 pour que les paramètres des fonctions puissent se faire appeler directement dans le console.log,
// je pense que j'ai bien fait ?
