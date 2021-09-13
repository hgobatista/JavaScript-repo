"use strict";
const restaurant = {
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
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
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here's your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
};

// Start here <----------

// Desta forma, logamos no console apenas o elemento atual;
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
console.log('');
// Inicialmente, a funcionalidade for-of foi criada para
// entregar apenas os elementos, e não o index. Mas podemos
// conseguir isso desta forma:
for (const item of menu.entries()) {
  console.log(item);
}
/*
------- Vai logar desse jeito:
(2) [0, 'Focaccia']
(2) [1, 'Bruschetta']
(2) [2, 'Garlic Bread']
(2) [3, 'Caprese Salad']
(2) [4, 'Pizza']
(2) [5, 'Pasta']
(2) [6, 'Risotto']
*/
console.log('');
// Se quisermos algo mais bonito, podemos fazer assim:
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
/*
------- Vai logar assim:
1: Focaccia
2: Bruschetta
3: Garlic Bread
4: Caprese Salad
5: Pizza
6: Pasta
7: Risotto
*/
// Porém, podemos deixar esse código mais bem escrito
// assim é mais old school, através do destructor podemos
// criar algo mais moderno:
console.log('');
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
/*
------- O resultado será o mesmo, porém o código mais moderno:
1: Focaccia
2: Bruschetta
3: Garlic Bread
4: Caprese Salad
5: Pizza
6: Pasta
7: Risotto
*/