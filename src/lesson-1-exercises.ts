// ===== EXERCICE 1 — Déclarer des variables typées =====
// TODO : Déclare une variable "monPrenom" de type string avec ton prénom
const monPrenom: string = "Camille";
// TODO : Déclare une variable "monAge" de type number avec ton âge
const monAge: number = 38;
// TODO : Déclare une variable "aimeLeChocolat" de type boolean
const aimeLeChocolat: boolean = true;
// TODO : Affiche les 3 variables dans la console
console.log(monPrenom);
console.log(monAge);
console.log(aimeLeChocolat);



// ===== EXERCICE 2 — Inférence vs annotation =====
// TODO : Déclare une variable "ville" SANS annotation explicite, juste avec une valeur
let ville = "Nancy";
// TODO : Essaie de lui assigner un nombre après. Que dit TypeScript ? (laisse l'erreur, c'est le but)
ville = 35;



// ===== EXERCICE 3 — const vs let =====
// TODO : Déclare une const "anneeNaissance" avec une année
const anneeNaissance = 1988;
// TODO : Essaie de la réassigner avec une autre année. Que dit TypeScript ? (laisse l'erreur)
anneeNaissance = 1986;


// ===== EXERCICE 4 — null vs undefined =====
// TODO : Déclare une variable "utilisateurConnecte" qui peut contenir un string OU null
//        (indice : cherche "union types" si tu veux essayer, sinon mets juste null)
const utilisateurConnecte: string | null = null;
// TODO : Affiche-la dans la console
console.log(utilisateurConnecte);


// ===== EXERCICE 5 — Template strings =====
// TODO : Crée 2 variables : "fruit" (string) et "quantite" (number)
const fruit = "pommes";
const quantite = 3;
// TODO : Utilise une template string pour afficher : "J'ai X bananes" (où X = quantite, et bananes = fruit)
console.log(`J'ai ${quantite} ${fruit}`);

// ===== EXERCICE BONUS — Mise en application =====
// Imagine que tu modélises un produit du webshop MPRO Orders
// TODO : Crée les variables suivantes avec les BONS types ET le bon mot-clé (const/let)
//   - nom du produit (ex: "Café en grains 1kg")
const productName: string = "Café en grains 1kg";
//   - prix (ex: 24.90)
const price: number = 24.90;
//   - en stock (true/false)
const inStock: boolean = true;
//   - quantité disponible (peut être un nombre OU null si stock inconnu)
const quantity: number | null = 12;
//   - description courte (peut être undefined si pas encore renseignée)
const shortDescription: string | undefined = undefined;
// Ajout d'une variable stockMessage pour éviter l'imbrication de variables avec le ternaire dans le console.log
const stockMessage: string = inStock 
  ? `il y a actuellement ${quantity} unités en stock` 
  : `il n'y a actuellement pas de stock disponible`;

// TODO : Affiche dans la console une phrase formatée comme :
// "Le produit "Café en grains 1kg" coûte 24.90 CHF et il y a 12 unités en stock"
// (utilise une template string)
console.log(`Le produit "${productName}" coûte ${price} CHF et ${stockMessage}.`);