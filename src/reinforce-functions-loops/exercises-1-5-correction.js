// ===================================================================
// CORRECTION — SALVE CIBLÉE — EXERCICES 1 À 5
// Pour chaque exercice : ce qui n'allait pas (❌), ce qui pouvait être mieux écrit (💡),
// puis l'exercice tel que je l'aurais écrit.
// Exécuter : node src/reinforce-functions-loops/exercises-1-5-correction.js
// ===================================================================

// ===== EXERCICE 1 — ✅ Réussi =====
// ❌ Ce qui n'allait pas :
//   - Le texte affiché est « Thrall (99) » : il manque le mot « niveau » demandé par l'énoncé
// 💡 À améliorer :
//   - createCharacter laisse penser que la fonction CRÉE un personnage (comme createPotion,
//     qui fabriquait un objet). Ici, elle fabrique un texte de présentation → formatCharacterLabel

function formatCharacterLabel(name, level) {
  return `${name} (niveau ${level})`;
}

console.log(formatCharacterLabel("Thrall", 99));
console.log(formatCharacterLabel("Vol'jin", 75));
console.log(formatCharacterLabel("Sylvanas", 81));

// ===== EXERCICE 2 — ✅ Diagnostic parfait =====
// ✅ Ta prédiction et ton explication sont exactes : affiche 72, le 200 est ignoré
// ❌ Ce qui n'allait pas :
//   - L'énoncé demandait aussi de CORRIGER le code : il est resté tel quel
// 💡 Ta remarque « on n'avait pas besoin d'une fonction » est juste POUR CE CODE-LÀ :
//   une fonction qui ne sait calculer qu'un seul prix ne sert à rien. Une fois corrigée,
//   elle devient utile justement parce qu'elle fonctionne pour n'importe quel prix

const discountRate = 0.1;

function applyDiscount(price) {
  return price - price * discountRate;
}

console.log(applyDiscount(200)); // 180
console.log(applyDiscount(80)); // 72

// ===== EXERCICE 3 — ✅ Fonctionne, et sans le cours : bravo =====
// ❌ Ce qui n'allait pas :
//   - La fonction MODIFIE l'objet héros qu'on lui confie (elle lui ajoute healthAfter).
//     Après l'appel, l'objet thrall n'est plus le même qu'avant : c'est un « effet de bord »,
//     source de bugs très difficiles à trouver. Une fonction qui calcule doit RENVOYER
//     son résultat, pas le ranger en douce dans les données qu'on lui a passées
//   - L'énoncé demandait de renvoyer les PV restants (un nombre). Ta fonction renvoie une
//     phrase : elle fait deux métiers à la fois (calculer ET rédiger). Si demain on veut juste
//     savoir si le héros est mort (PV à 0), il faudrait refaire le calcul
//   - Thrall et Jaina avec une majuscule → thrall et jaina
// 💡 À améliorer :
//   - Le calcul hero.health - damageDealt est écrit deux fois → le ranger d'abord dans une const
//   - Un verbe pour le nom : applyDamage, ou calculateRemainingHealth
//   - healthAfter: 120 dans les objets de départ : une donnée inutile, à supprimer
//   - Dans le texte : « a subi » (et non « subit ») et « 45 dégâts »
//
// TA QUESTION SUR LET : ton raisonnement était logique, mais c'est const qu'il fallait.
//   const interdit de RÉASSIGNER la variable (thrall = un autre objet), mais il n'interdit PAS
//   de modifier le CONTENU de l'objet (thrall.health = 50 fonctionne avec const).
//   C'est comme une étiquette collée sur une boîte : const empêche de recoller l'étiquette
//   sur une autre boîte, mais on peut toujours changer ce qu'il y a dans la boîte.
//   (Et ici, de toute façon, on ne devrait pas modifier l'objet du tout.)

function applyDamage(hero, damage) {
  const remainingHealth = hero.health - damage;
  if (remainingHealth < 0) {
    return 0;
  }
  return remainingHealth;
}

const thrall = { name: "Thrall", health: 120 };
const jaina = { name: "Jaina", health: 30 };

console.log(
  `${thrall.name} avait ${thrall.health} PV et a subi 45 dégâts : il lui reste ${applyDamage(thrall, 45)} PV.`,
);
console.log(
  `${jaina.name} avait ${jaina.health} PV et a subi 50 dégâts : il lui reste ${applyDamage(jaina, 50)} PV.`,
);

// ===== EXERCICE 4 =====
// CODE A — ❌ Prédiction fausse, mais ton analyse après coup est EXACTEMENT la bonne
//   Le 1er return fait sortir de la fonction : le code qui suit n'est jamais lu.
//   Donc la ligne après le if n'est atteinte QUE si le if était faux : c'est un « else » implicite.
//   Les deux écritures font la même chose :
//     if (level >= 10) { return "Confirmé"; } else { return "Débutant"; }
//     if (level >= 10) { return "Confirmé"; }  return "Débutant";
//   La seconde est très courante dans le code pro. Tu peux continuer à écrire le else si ça t'aide.
//
// CODE B — ✅ Juste. Et oui, pour renvoyer deux valeurs, on renvoie un objet. Tu dis ne plus
//   savoir l'écrire… mais tu l'as fait parfaitement à l'exercice 5, juste en dessous ! La preuve :

function getStats() {
  const attack = 12;
  const defense = 8;
  return { attack: attack, defense: defense };
}

const stats = getStats();
console.log(`Attaque : ${stats.attack}, défense : ${stats.defense}`);

// CODE C — ✅ Juste, avec la bonne explication : la fonction affiche « Bonjour Jaina »
//   au moment de l'appel, mais ne renvoie rien. message reçoit donc undefined.
//   Rappel : une variable reçoit ce qui est RENVOYÉ, jamais ce qui est AFFICHÉ.

// ===== EXERCICE 5 — ✅ Le résultat est juste… mais en partie par chance =====
// ❌ Ce qui n'allait pas :
//   - Regarde bien les majuscules : dehors, tu as déclaré DiscountRateExo (D majuscule).
//     Dans la fonction, tu écris dans discountRateExo (d minuscule). Ce sont DEUX variables
//     différentes ! Et discountRateExo n'est déclarée nulle part, ni let ni const :
//     JavaScript crée en douce une variable globale (le même mécanisme que ton tableau [ ]
//     du premier jour). Ton contournement n'a donc pas résolu l'erreur : il l'a cachée
//   - Pourquoi ton let dans le if donnait « not defined » : une variable déclarée avec let
//     ou const n'existe QUE dans le bloc { } où elle est née. Déclarée dans le if, elle
//     disparaît à l'accolade fermante du if, avant le return. C'est la « portée » (scope).
//     La solution : la déclarer AVANT le if, dans la fonction (version 1), ou utiliser
//     un ternaire, qui fait tout en une ligne (version 2)
//   - Le renommage en « Exo » n'était pas nécessaire : une variable déclarée DANS une fonction
//     n'existe que dans cette fonction, elle ne peut pas entrer en conflit avec le
//     discountRate de l'exercice 2. Seules les variables déclarées tout en haut du fichier
//     se marchent dessus
// 💡 À améliorer :
//   - isMember === true → isMember tout court (c'est déjà un booléen)
//   - Le taux membre est une règle fixe : il peut vivre hors de la fonction, dans une const
//   - L'unité « pièces » manquait dans l'affichage
//   - Renvoyer un objet avec les trois informations : ✅ exactement la bonne idée !
//     (isMember et discountRate dans l'objet ne gênent pas, mais ne sont pas utiles ici)

const memberDiscountRate = 0.15;

// Version 1 : la variable est déclarée avant le if, dans la fonction
function calculatePurchase(price, isMember) {
  let appliedRate = 0;
  if (isMember) {
    appliedRate = memberDiscountRate;
  }
  const discountAmount = price * appliedRate;
  return {
    startPrice: price,
    discountAmount: discountAmount,
    finalPrice: price - discountAmount,
  };
}

// Version 2 : avec un ternaire, plus besoin de let
function calculatePurchaseWithTernary(price, isMember) {
  const appliedRate = isMember ? memberDiscountRate : 0;
  const discountAmount = price * appliedRate;
  return {
    startPrice: price,
    discountAmount: discountAmount,
    finalPrice: price - discountAmount,
  };
}

const memberPurchase = calculatePurchase(200, true);
const nonMemberPurchase = calculatePurchaseWithTernary(200, false);

console.log(
  `Prix de départ : ${memberPurchase.startPrice} pièces / Remise : ${memberPurchase.discountAmount} pièces / Prix final : ${memberPurchase.finalPrice} pièces`,
);
console.log(
  `Prix de départ : ${nonMemberPurchase.startPrice} pièces / Remise : ${nonMemberPurchase.discountAmount} pièces / Prix final : ${nonMemberPurchase.finalPrice} pièces`,
);
