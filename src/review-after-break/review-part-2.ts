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

// ===== EXERCICE 13 — PRÉDICTION : RÉPONDS AVANT DE DÉCOMMENTER =====
// Pour chaque ligne marquée d'une lettre, TypeScript signale-t-il une erreur ?
// Si oui, pourquoi ? Écris tes réponses en commentaire.
// Ensuite seulement, décommente le code pour vérifier (Error Lens affichera les erreurs),
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

// ===== EXERCICE 14 =====
// Voici les prix d'un panier :
const prices: number[] = [12.5, 34, 8.9, 21, 45.5, 3.2];
// Avec une boucle for...of, calcule le total du panier et le nombre d'articles
// qui coûtent plus de 20 CHF. Affiche les deux résultats.

// ===== EXERCICE 15 =====
// Tu mets de côté 150 CHF par mois, en partant de zéro. Ton objectif est d'atteindre 2000 CHF.
// Avec une boucle while, calcule combien de mois il te faut pour atteindre ou dépasser
// cet objectif. Affiche le nombre de mois et le montant final épargné.

// ===== EXERCICE 16 — PRÉDICTION : RÉPONDS AVANT D'EXÉCUTER =====
// Pour chacune de ces valeurs, écris en commentaire si elle est truthy ou falsy :
// 0, "0", "", " " (un espace), [], null, undefined, 42, "false"
// Vérifie ensuite si tu veux, et note combien tu en avais trouvé.

// ===== EXERCICE 17 =====
// Règle métier : une commande bénéficie de la livraison gratuite si son montant atteint
// 100 CHF, ou si le client est premium et que le montant atteint 50 CHF.
// Une commande annulée n'en bénéficie jamais, quel que soit le reste.
// Pose les variables nécessaires, calcule le résultat dans une variable booléenne,
// et teste trois situations :
//   - une qui donne true grâce au montant seul
//   - une qui donne true grâce au statut premium
//   - une qui donne false parce que la commande est annulée
