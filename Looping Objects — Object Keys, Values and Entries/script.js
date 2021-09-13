"use strict";
const openingHours = {
  thu: {
    open: 22,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here's your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
};

// Start here <----------


//Property NAMES (KEYS)
for (const day of Object.keys(openingHours)) {
  console.log(day);
};
/* Desta forma, ele loga os nameKeys do objeto:
    thu
    fri
    sat
*/


console.log('');
// Podemos criar ainda um array com estas nameKeys:
const properties = Object.keys(openingHours);
console.log(properties);
/* Console:
  (3) ['thu', 'fri', 'sat']
 */

console.log('');
// Podemos também usar esse array pra criar uma
// string dizendo quantos dias da semana o restaurante
// estará aberto:
console.log(`We are open on ${properties.length} days`);

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// };
let openStr = `We are open on ${properties.length} days: `
for (const day of properties) {
  openStr += `${day}, `;
};
console.log(openStr);
/* Console Log
  We are open on 3 days
  We are open on 3 days: thu, fri, sat, 
*/



console.log('');
// Property VALUES (VALUES)
const values = Object.values(openingHours);
console.log(values);
/*  Console log:
  (3) [{…}, {…}, {…}]
*/


console.log('');
// Property NAMES + VALUES (ENTRIES)
const entries = Object.entries(openingHours);
//console.log(entries);
for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
/*  Console log:

    On thu we open at 22 and close at 22
    On fri we open at 11 and close at 23
    On sat we open at 0 and close at 24

*/