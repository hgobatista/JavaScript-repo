"use strict";

/*
Rest Pattern é APARENTEMENTE igual ao Spread Operator, com a mesma SINTAXE,
porém ele faz o OPOSTO do Spread Operator.
O Rest Pattern agrupa itens em um array.
*/
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

// ------------------ 1ª parte = Destructuring

// Com o Spread Operator, no último exemplo, adicionamos um array em um outro array, desta forma:
const arr = [1, 2, 3, ...[4, 5]]; // <------------ Aqui, usamos os 3 pontos do lado DIREITO do IGUAL (=);
console.log(arr);
// O Rest Pattern é usado do lado ESQUERDO do (=):
const [a, b, ...others] = arr;
console.log(a, b, others);
/*
O que aconteceu? 
- (a = 1º elemento),
- (b = 2º elemento),
- (...others = restante do array).
*/

// Nós podemos usar os três pontos dos dois lados
// do operador. Digamos que teremos um array que será
// o "menu inteiro". Podemos desestruturar. Digamos
// que, olhando o mainMenu, gostaríamos de obter a
// 'Pizza' e o 'Risotto', os items [0] e [2]. Desta
// forma, colocaremos o PRIMEIRO ITEM na variável PIZZA,
// o SEGUNDO ITEM deixaremos em vácuo, o TERCEIRO ITEM
// na variável RISOTTO, e o restante dos itens usaremos
// os TRÊS PONTOS e colocaremos todo o restante na variável
// otherFood.
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
// Note que o segundo item do array mainMenu, 'Pasta', não foi logado
// no console, como é de se esperar quando colocamos o vácuo entre vírgulas,
// apenas os ÚLTIMOS ITENS - por isso o nome Rest Pattern <--------

// Vamos testar agora em OBJECTS - a diferença é que os
// ITENS QUE SOBRAREM ficarão guardados em um NOVO OBJETO
// e NÃO EM um novo ARRAY.
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat);
console.log(weekDays);
// O resultado foi como o esperado, o OBJETO 'sat'
// ficou guardado dentro do objeto sat, e o restante
// dos itens ficou guardado dentro do objeto weekdays.

// ------------------ 2ª parte = Functions (Rest Arguments)
// Em funções, os números são obtidos como argumentos
// e são retornados como um array, todos encapsulados
// e unidos.
const add = function (...numbers) {
  //console.log(numbers);
  let sum = 0;
  for(let i = 0; i<numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(4, 5, 6, 1, 2);

const x = [23, 5, 7];
add(...x);

