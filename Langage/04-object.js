// En JS on manipule des objets existants au niveau du langage
console.log(Math.random());
console.log(typeof Math); // object

// ou au niveau de l'environnement (Node ou Navigateur...)
console.log(typeof console); // object

// on peut étendre (sauf verrou) n'importe quel objet
Math.mathematicien = 'Evariste Galois';
console.log(Math.mathematicien); // Evariste Galois

// on peut aussi les modifier
var randomBackup = Math.random;
Math.random = function() {
    return 0.5;
};

console.log(Math.random()); // 0.5
Math.random = randomBackup;
console.log(Math.random()); // 0.24554522

// mais aussi supprimer
delete Math.mathematicien;
console.log(Math.mathematicien); // undefined

// On peut accéder au contenu d'un objet avec l'opérateur .
console.log(Math.random());

// Ou l'opérateur []
console['log'](Math['random']());

// Avec les crochet on peut récupérer un nom de méthode depuis une config
var configLog = 'error'; // peut venir d'un fichier de config
console[configLog]('Mon message');

// Egalement si le nom de la propriété est un identifiant invalide
Math['un-mathematicien'] = 'Evariste Galois';

// Si besoin ponctuel d'un object on pourrait écrire (mauvaise pratique)
var coords = new Object();
coords.x = 10;
coords.y = 20;

console.log(coords.x); // 10

// Privilégier la syntaxe object literal
var coords = {
    x: 10,
    y: 20
};

// vaut aussi pour 
// les chaines de caractères
var str = new String('Romain'); // mauvaise pratique
var str = 'Romain'; // bonne pratique

// les tableaux
var tab = new Array('Romain'); // mauvaise pratique
var tab = ['Romain']; // bonne pratique

// les regexp
var re = new RegExp('[a-z]+'); // mauvaise pratique
var re = /[a-z]+/; // bonne pratique

// on peut itérer sur les propriétés d'un objet
for (var prop in coords) {
    console.log(prop); // 'x' 'y'
    console.log(coords[prop]); // 10 20
}

// on peut sérialiser un object avec la syntaxe JSON
// pas de fonction et de types en JSON
// JSON : JavaScript Object Notation

var json = JSON.stringify(coords);
console.log(json); // {"x": 10, "y": 20}
console.log(typeof json); // string

// ....... réseau .........

var coords = JSON.parse(json);
console.log(coords.x); // 10

// on peut créer un objet à partir d'une fonction (fonction constructeur)
var Coords = function(x, y) {
    this.x = x;
    this.y = y;
};

var coords = new Coords(10, 20);
console.log(typeof Coords); // function
console.log(typeof coords); // object
console.log(coords.x); // 10

// on peut placer les méthodes directement dans l'objet (mauvaise pratique)
// permet de simuler des propriétés privées
var Coords = function(x, y) {
    
    this.getX = function() {
        return x;
    };

    this.setX = function(_x) {
        x = _x;
    };
};

var coords1 = new Coords(10, 20);
console.log(coords1.getX()); // 10

var coords2 = new Coords(10, 20);
console.log(coords2.getX()); // 10

console.log(coords1.getX === coords2.getX); // false

// le mieux est de placer les méthodes dans les prototypes
var Coords = function(x, y) {
    this.x = x;
    this.y = y;
};

Coords.prototype.doubleX = function() {
    return this.x * 2;
};

var coords1 = new Coords(10, 20);
console.log(coords1.x); // 10 (propriété trouvée dans l'objet)
console.log(coords1.doubleX()); // 20 (propriété trouvée dans le prototype de la fonction constructeur)
console.log(coords1.hasOwnProperty('x')); // true (propriété trouvée dans un prototype hérité, ici Object)
console.log(coords1.hasOwnProperty('doubleX')); // false
console.log(coords1.toto); // undefined

var coords2 = new Coords(10, 20);
console.log(coords1.doubleX === coords2.doubleX); // true

// ES6
class Contact {
    constructor(prenom) {
        this.prenom = prenom;
    }
    hello() {
        return `Bonjour je m'appelle ${this.prenom}`;
    }
}

var romain = new Contact('Romain');
console.log(romain.hello()); // Bonjour je m'appelle Romain
console.log(typeof Contact); // function
console.log(typeof Contact.prototype.hello); // function

// Héritage en ES5
var Coords3d = function(x, y, z) {
    Coords.apply(this, arguments);
    this.z = z;
};

Coords3d.prototype = Object.create(Coords.prototype);
Coords3d.prototype.doubleZ = function() {
    return this.z * 2;
};
Coords3d.prototype.doubleX = function() {
    return Coords.prototype.doubleX.call(this) + 0.5;
};

var coords3d = new Coords3d(10, 20, 30);
console.log(coords3d.x); // 10
console.log(coords3d.y); // 20
console.log(coords3d.z); // 30
console.log(coords3d.doubleX()); 

// Héritage en ES6
class Formateur extends Contact {
    constructor(prenom, specialite) {
        super(prenom);
        this.specialite = specialite;
    }
    hello() {
        return super.hello() + `, ma spécialité est ${this.specialite}`;
    }
}

var romain = new Formateur('Romain', 'JS');
console.log(romain.hello()); // Bonjour je m'appelle Romain, ma spécialité est JS