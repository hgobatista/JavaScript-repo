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
/* Sets são bem parecidos com arrays, a diferença é
que eles não possuem index e não podem ter elementos
duplicados.
Uma de suas principais funcionalidades remover elementos
duplicados de arrays.
*/
const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(orderSet);
/* Console:
  Set(3) {'Pasta', 'Pizza', 'Risotto'}
*/ console.log("");
//----------------------
// Um set é iterable, podemos então fazer isso:
console.log(new Set("Hugo Batista"));
/* Console:
  Set(10) {'H', 'u', 'g', 'o', ' ', …}
    [[Entries]]
      0: "H"
      1: "u"
      2: "g"
      3: "o"
      4: " "
      5: "B"
      6: "a"
      7: "t"
      8: "i"
      9: "s"
      size: 10
 */ console.log("");
//----------------------
// Vejamos agora como trabalhar com Sets;
// Nós conseguimos conhecer o tamanho de um set:
console.log(orderSet.size);
console.log("");
// Conseguimos também saber se há um determinado
// elemento dentro do set:
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));
/* Console:
    true
    false
*/
console.log("");
// Conseguimos também ADICIONAR um elemento a um set:
orderSet.add("Garlic Bread");
console.log(orderSet);
/* Console:
   Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}

*/
console.log("");
// Conseguimos também DELETAR elementos de um set:
orderSet.delete("Risotto");
console.log(orderSet);
/* Console:
  Set(3) {'Pasta', 'Pizza', 'Garlic Bread'}
*/
console.log("");
// Por último, há um método que nos permite LIMPAR um set:
// orderSet.clear(orderSet); <-- excluí pra poder mostrar o de baixo
console.log(orderSet);
console.log("");
// Como o set é um iterable, podemos fazer um LOOP nele:
for (const order of orderSet) console.log(order);
/* Console:
    Pasta
    Pizza
    Garlic Bread
*/
// -------------------
console.log("");
//Como REMOVER ITENS DUPLICADOS em um ARRAY:
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
console.log(staff);
/* Console:
    (6) ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
      0: "Waiter"
      1: "Chef"
      2: "Waiter"
      3: "Manager"
      4: "Chef"
      5: "Waiter"
*/
console.log("");
const staffUnique = new Set(staff);
console.log(staffUnique);
/* Console: (Note que é um Set e nao um array)
    Set(3) {'Waiter', 'Chef', 'Manager'}
*/
console.log("");
// Para converter em array, basta:
const staffUniqueArray = [... new Set(staff)];
console.log(staffUniqueArray);
/* Console: (Agora sim é um array)
    (3) ['Waiter', 'Chef', 'Manager']
      0: "Waiter"
      1: "Chef"
      2: "Manager"
*/
console.log('');
// Por último, podemos CONTAR QUANTAS LETRAS há em uma string:
console.log(new Set ('HugoFernandoBatista'));
/* Console:
  Set(14) {'H', 'u', 'g', 'o', 'F', …}
      [[Entries]]
      0: "H"
      1: "u"
      2: "g"
      3: "o"
      4: "F"
      5: "e"
      6: "r"
      7: "n"
      8: "a"
      9: "d"
      10: "B"
      11: "t"
      12: "i"
      13: "s"
*/