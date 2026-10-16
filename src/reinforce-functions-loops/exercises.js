// ===================================================================
// SALVE CIBLÉE — Fonctions, return, compteurs et accumulateurs
// Exécuter : node src/reinforce-functions-loops/exercises.js
// Note en commentaire comment tu y es arrivée (facile, galère, tentative, cours consulté...)
//
// Deux règles pour cette salve :
//   - Exercices de PRÉDICTION : écris ta réponse en commentaire AVANT de dé-commenter et d'exécuter.
//   - Exercices de DÉBOGAGE : écris en commentaire la CAUSE de chaque problème AVANT de toucher
//     au code. Ensuite seulement, corrige.
// ===================================================================

// ===================================================================
// PARTIE A — Ce qui entre dans une fonction
// ===================================================================

// ===== EXERCICE 1 =====
// Écris une fonction qui reçoit le nom d'un personnage et son niveau,
// et renvoie le texte : Thrall (niveau 99)
// Affiche le résultat pour trois personnages différents.

function createCharacter(name, level) {
  return `${name} (${level})`;
}

console.log(createCharacter("Thrall", 99));
console.log(createCharacter("Voljin", 75));
console.log(createCharacter("Sylvanas", 81));

// COMMENTAIRE : aucune difficulté ici :)

// ===== EXERCICE 2 — DÉBOGAGE (prédiction d'abord) =====
// Ce code est censé afficher le prix d'un article de 200 pièces après une remise de 10 %,
// c'est-à-dire 180. Sans l'exécuter : qu'affiche-t-il réellement, et pourquoi ?
// Écris ta réponse, puis dé-commente, vérifie, et corrige le code.
//
const discountRate = 0.1;
const price = 80;
//
function applyDiscount() {
  return price - price * discountRate;
}
console.log(applyDiscount(200));

// COMMENTAIRE AVANT exécute : on ne donne pas de paramètre à applyDiscount donc à partir de là, j'imagine que quand on appelle la fonction avec un paramètre dans le console.log,
// la fonction ne sait pas où mettre ce paramètre et donc soit entre en erreur soit ne le prends pas en compte (plus probablement ne la prendra pas en compte).
// Le calcul sera donc toujours celui de la constante price (à 80) et cette fonction ne pourra pas servir pour autre chose, même si on l'appelle en lui donnant un paramètre.
// (et donc à partir de là, on avait pas besoin d'en faire une fonction, on pouvait simplement mettre une variable const discountedPrice = price - price * discountRate)

// COMMENTAIRE APRES exécute : le doute sur le fait que ça se mette en erreur est levé : ça marche mais comme prévu, ça ne prend pas en compte le paramètre donné dans l'appel de la fonction dans le console.log

// ===== EXERCICE 3 =====
// Écris une fonction qui reçoit un objet héros (nom, points de vie actuels)
// et un nombre de dégâts, et qui renvoie les points de vie restants après l'attaque.
// Les points de vie ne peuvent jamais descendre sous 0.
// Teste avec : un héros à 120 PV qui subit 45 dégâts, puis un héros à 30 PV qui en subit 50.
// Affiche une phrase pour chaque cas.

function remainingHealth(hero, damageDealt) {
  // j'ai pas trouvé de verbe pour décrire la fonction
  if (hero.health - damageDealt >= 0) {
    hero.healthAfter = hero.health - damageDealt;
  } else {
    hero.healthAfter = 0;
  }
  return `${hero.name} avait ${hero.health} PV et a subit ${damageDealt}. Il a donc désormais ${hero.healthAfter} PV.`;
}

let Thrall = {
  name: "Thrall",
  health: 120,
  healthAfter: 120,
};

let Jaina = {
  name: "Jaina",
  health: 30,
  healthAfter: 30,
};

console.log(remainingHealth(Thrall, 45));
console.log(remainingHealth(Jaina, 50));

// COMMENTAIRE : j'ai eu beaucoup de mal à faire l'exercice, mais je ne me suis pas du tout aidée du cours et j'ai fini par avoir une solution qui fonctionne (c'est une victoire mais je sens
// que j'ai encore besoin de plus d'exercices dessus). Par contre, pas sûre du tout que ma solution soit propre et pas du bricolage rafistolé :D Également pour mes objets, j'ai mis "let" car
// même si on ne réassigne pas le nom et la vie, on réassigne healthAfter, donc comme ça change, je me suis dit que ça en faisait un "let" ?

// ===================================================================
// PARTIE B — Ce qui sort d'une fonction
// ===================================================================

// ===== EXERCICE 4 — PRÉDICTION : RÉPONDS AVANT DE DÉ-COMMENTER =====
// Qu'affiche chacun de ces trois codes ? Explique pourquoi pour chacun.
//
// Code A
function checkLevel(level) {
  if (level >= 10) {
    return "Confirmé";
  }
  return "Débutant";
}
console.log(checkLevel(15));
console.log(checkLevel(3));

// COMMENTAIRE AVANT : Il y a un return dans le if mais le 2ème return n'est pas le "else" mais directement dans la fonction. Donc j'imagine que ça signifie que ça écrase le return du if?
// COMMENTAIRE APRES : et bien je m'étais plantée ici ! Ca marche comme prévu ! J'aurais pensé qu'il fallait que le 2ème return soit dans le "else". Mais je pense avoir compris mon erreur :
// si le if est vrai alors ça retourne "Confirmé" et ça sort de la fonction. Mais comme le 2ème retourne n'est pas dans une condition if, et est donc inconditionnel, je pensais que si on
// appelait la fonction, ce serait celui là qui serait pris en compte....

// Code B
function getStats() {
  const attack = 12;
  const defense = 8;
  return attack;
  return defense;
}
console.log(getStats());
//
// COMMENTAIRE  AVANT: la fonction n'a aucun intérêt telle qu'écrite ici, mais c'est un autre sujet :)
// Il ne peut pas y avoir 2 return dans la fonction, ça ne marche pas, ça renvoie le premier return et ça sort de la fonction donc ça ne va jamais jusqu'au 2ème return
// Pour renvoyer 2 valeurs, il faudrait renvoyer un objet éventuellement ?
// COMMENTAIRE APRES : j'avais juste : ça ne renvoie que le premier return ! Par contre je sais que j'ai relu comment renvoyer des objets, mais je ne me souviens plus
// comment il aurait fallu faire :(

//CODE C
function greet(name) {
  console.log(`Bonjour ${name}`);
}
const message = greet("Jaina");
console.log(message);

// COMMENTAIRE AVANT : on fait ici un console.log de quelque chose qui a déjà un console.log....Après j'ai peut-être aussi un problème : la fonction fait un console.log donc elle affiche le bonjour Jaina mais elle ne le stock pas
// Donc si elle ne le stock pas (via un return) est-ce qu'on peut quand même le mettre/l'utiliser dans un variable après et hors de la fonction ? j'en suis pas certaine du tout. Du coup, il y a 2 issues possibles :
// ou bien const message arrive à récupérer le console.log de la fonction (mais sans return, je ne crois pas que ça y arrive), et dans ce cas le console.log("Jaina") afficherait problabmenet correctement à moins que ça
// répète le console.log et que ça affiche "Console.log..." Ou bien elle y arrive pas et là ça renvoie undefined. Je penche pour ça.

// COMMENTAIRE APRES : j'étais pas sûre de moi mais au final j'ai pris la bonne décision et probablement avec la bonne explication !

// ===== EXERCICE 5 =====
// Écris une fonction qui reçoit le prix d'un objet et le fait que l'acheteur soit membre
// de la guilde ou non. Les membres ont 15 % de remise, les autres aucune.
// La fonction doit permettre d'afficher, à partir d'un seul appel, ces trois informations :
//   Prix de départ : 200 pièces / Remise : 30 pièces / Prix final : 170 pièces
// Teste avec un membre et avec un non-membre.

let DiscountRateExo = 0.15;

function calculateFinalPrice(price, isMember) {
  if (isMember === true) {
    discountRateExo = DiscountRateExo;
  } else {
    discountRateExo = 0;
  }
  return {
    isMember: isMember,
    price: price,
    discountRate: discountRateExo,
    discountAmount: price * discountRateExo,
    finalPrice: price * (1 - discountRateExo),
  };
}

const member = calculateFinalPrice(200, true);
const nonMember = calculateFinalPrice(200, false);
console.log(
  `Prix de départ : ${member.price} / Remise : ${member.discountAmount} / Prix final : ${member.finalPrice} `,
);
console.log(
  `Prix de départ : ${nonMember.price} / Remise : ${nonMember.discountAmount} / Prix final : ${nonMember.finalPrice} `,
);

// COMMENTAIRE : encore une fois j'ai été en grande difficulté ici, mais je n'ai pas eu recours à mon cours et j'ai fini quand même par y arriver !
// Et comme tout ce qui me met en grande difficulté, à mon avis, mon code fonctionne mais est loin d'être propre?
// Egalement j'ai longtemps seché sur discountRateExo qui me donnait une erreur comme quoi je ne l'avait pas défini. Alors que j'avais mis des let directement dans ma boucle if.
// Pour contourner le problème j'ai mis un taux par défaut en dehors de ma fonction. Egalement j'ai du rajouter un "Exo" dans ma variable DiscountRate car il y avait deja un discountRate dans un autre exo plus haut.

// ===================================================================
// PARTIE C — Compter et accumuler
// ===================================================================

// ===== EXERCICE 6 =====
// Écris une fonction qui reçoit un nombre max et renvoie la somme de tous les multiples de 3
// compris entre 1 et max. Pour max = 10, elle renvoie 18 (3 + 6 + 9).
// Teste avec 10, puis avec 20.

// ===== EXERCICE 7 =====
// Voici les scores d'une équipe à un tournoi :
// const scores = [14, 8, 17, 11, 6, 19, 10];
// Écris une fonction qui reçoit un tableau de scores et permet d'afficher :
//   - le nombre de scores supérieurs ou égaux à 10
//   - le meilleur score
// Affiche une phrase avec les deux informations.

// ===== EXERCICE 8 — DÉBOGAGE =====
// Cette fonction est censée renvoyer le nombre total de potions dans un inventaire,
// ainsi que le nombre d'emplacements qui contiennent plus de 5 potions.
// Pour l'inventaire ci-dessous, le résultat attendu est : 31 potions, 2 emplacements à plus de 5.
// Dé-commente le code, exécute-le, puis écris en commentaire TOUS les problèmes que tu trouves
// et leur cause, AVANT de corriger quoi que ce soit.
//
// const inventory = [3, 7, 2, 12, 5, 2];
//
// function countPotions(slots) {
//   let total = 1;
//   let bigSlots = 0;
//   for (slot of slots) {
//     total = total + slot;
//     if (slot > 5) {
//       bigSlots = bigSlots++;
//     }
//     return { total: total, bigSlots: bigSlots };
//   }
// }
//
// const result = countPotions(inventory);
// console.log(`${result.total} potions, ${result.bigSlots} emplacements à plus de 5`);

// ===== EXERCICE 9 =====
// Un dragon a 500 points de vie. Ton héros lui inflige 45 dégâts à chaque tour.
// Écris une fonction qui reçoit les points de vie du dragon et les dégâts par tour,
// et qui permet d'afficher :
//   - le nombre de tours nécessaires pour vaincre le dragon (ses PV tombent à 0 ou moins)
//   - le nombre de dégâts « en trop » infligés au dernier tour
// Teste avec 500 PV et 45 dégâts, puis avec 300 PV et 50 dégâts.

// ===================================================================
// PARTIE D — Lire le besoin jusqu'au bout
// ===================================================================

// ===== EXERCICE 10 =====
// Règles de la boutique :
//   - Les membres ont 10 % de remise sur le montant du panier.
//   - Le code promo "BIENVENUE" retire 5 CHF, uniquement si le montant du panier
//     AVANT toute remise est strictement supérieur à 30 CHF.
//   - Les deux avantages se cumulent : la remise membre s'applique en premier,
//     le code promo ensuite.
//   - Un code promo absent ou vide signifie qu'il n'y a pas de code.
// Écris une fonction qui reçoit le montant du panier, le fait que le client soit membre ou non,
// et le code promo (qui peut ne pas exister), et qui renvoie le prix final.
// Teste ces cinq cas (le résultat attendu est indiqué entre crochets) :
//   - 50 CHF, membre, pas de code                        [45]
//   - 50 CHF, non membre, code "BIENVENUE"               [45]
//   - 50 CHF, membre, code "BIENVENUE"                   [40]
//   - 30 CHF, non membre, code "BIENVENUE"               [30]
//   - 50 CHF, non membre, code vide                      [50]
// Si un de tes résultats ne correspond pas : cherche POURQUOI avant de modifier ton code,
// et note en commentaire ce que tu as trouvé.

// ===== EXERCICE 11 =====
// Écris une fonction qui reçoit un objet joueur (nom, connecté ou non) et renvoie
// la phrase « Jaina est en ligne » ou « Jaina est hors ligne ».
// Teste avec deux joueurs, un dans chaque situation.

// ===================================================================
// BONUS — Tout ensemble
// ===================================================================

// ===== EXERCICE 12 =====
// Voici les participants d'un tournoi :
// const players = [
//   { name: "Thrall", score: 84, isDisqualified: false },
//   { name: "Jaina", score: 91, isDisqualified: true },
//   { name: "Sylvanas", score: 88, isDisqualified: false },
//   { name: "Anduin", score: 79, isDisqualified: false },
// ];
// Écris une fonction qui reçoit la liste des participants et permet d'afficher :
//   - le nom du vainqueur (le meilleur score parmi les joueurs NON disqualifiés)
//   - le nombre de joueurs non disqualifiés
// Affiche : Sylvanas remporte le tournoi parmi 3 joueurs en lice.
