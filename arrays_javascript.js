//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

//correcció Joan Quintana -> joan4
//Crear un Array
let fruites = ["Poma", "TAronja"];

//joan6
console.log(fruites.length);

//canvis joan2
//Acceder a un elemento de Array mediante su índice
let primer = fruites[0];
console.log(primer);

let ultim = fruites[fruites.length - 1];
console.log(ultim);

//Recórrer un Array
fruites.forEach(function(element, index, array) {
    console.log(element, index);
});

//correcció joan3
//Afegir un element al final d'un Array
console.log(fruites.push('Mandarina')); //push retorna la nova longitud
console.log(fruites);

//Eliminar l'últim element d'un Array
ultim = fruites.pop();

//Afegir un element al principi d'un Array
novaLongitud = fruites.unshift('Maduixa'); // Afegeix "Maduixa" a l'inici

//Eliminar el primer element d'un Array
primer = fruites.shift(); // Elimina "Maduixa" de l'inicio

//Tornem a afegir maduixa
fruites.push('Maduixa')

//Trobar l'índex d'un element de l'Array
let pos = fruites.indexOf('Taronja'); // pos és la posició

//Eliminar un únic element mitjançant la seva posició
let elementEliminat = fruites.splice(pos, 1);

//Eliminar varis elements a partir d'una posició
let vegetals = ['Carbassó', 'Esbergínia', 'Rave', 'Pastanaga'];
console.log(vegetals);

pos = 1
let numElements = 2;

let elementsEliminats = vegetals.splice(pos, numElements);

console.log(vegetals);

//Copiar un Array
let copiaArray = vegetals.slice();

//Creació d'un array unidimensional
let missatges = [];
missatges[0] = "Hola";
missatges[99] = "món";

if (missatges.length === 100) {
   console.log("La longitud és de 100.");
}

//Creació d'una matriu de dues dimensions
let taulell = [
  ['T','C','A','D','R','A','C','T'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['t','c','a','d','r','a','c','t'] ];

console.log(taulell.join('\n') + '\n\n');

// Avançar dues posicions el peó de rei
taulell[4][4] = taulell[6][4];
taulell[6][4] = ' ';
console.log(taulell.join('\n'));

//Ús d'un array per a tabular un conjunt de valors
valors = [];
for (let x = 0; x < 10; x++){
 valors.push([
  2 ** x,
  2 * x ** 2
 ]);
}
console.table(valors);
