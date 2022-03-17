//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

//Crear un Array
let fruites = ["Poma", "Taronja"]; //alumne1

console.log(fruites.length);

//Accedir a un element de l'Array mitjançant el seu índex
let primer = fruites[0];  //alumne2
console.log(primer);

let ultim = fruites[fruites.length - 1];
console.log(ultim);  //alumne3

//Recórrer un Array
fruites.forEach(function(element, index, array) {  //alumne4
    console.log(element, index);
});

//Afegir un element al final d'un Array
console.log(fruites.push('Mandarina')); //push retorna la nova longitud
console.log(fruites);

//Eliminar l'últim element d'un Array
ultim = fruites.pop();  //alumne5

//Afegir un element al principi d'un Array
novaLongitud = fruites.unshift('Maduixa');  //alumne6
//Eliminar el primer element d'un Array
primer = fruites.shift();  //alumne7 // Elimina "Maduixa" de l'inicio

//Tornem a afegir maduixa
fruites.push('Maduixa');

//Trobar l'índex d'un element de l'Array
let pos = fruites.indexof('Taronja');  //alumne8 // pos és la posició

//Eliminar un únic element mitjançant la seva posició
let elementEliminat = frutes.splice(pos, 1);  //alumne9 // no hi ha errors

//Eliminar varis elements a partir d'una posició
let vegetals = ['Carbassó', 'Esbergínia', 'Rave, 'Pastanaga'];  //alumne10
console.log(vegetals);

pos = 1
let numElements = 2;

let elementsEliminats = vegetalssplice(pos, numElements);  //alumne11

console.log(vegetals);

//Copiar un Array
let copiaArray = vegetals.slice();

//Creació d'un array unidimensional
let missatges = [;  //alumne12
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
