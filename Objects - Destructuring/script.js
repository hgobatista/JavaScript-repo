"use strict";

const restaurant = {
  nome: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({starterIndex, mainIndex, time, address}) {

    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
/*
Para desestruturar objetos, usamos {chaves}, assim como criamos;
Entao, devemos usar os exatos mesmos nomes das variáveis usadas
nos objetos. Nos objetos, a ordem não faz diferença (não é igual nos
  arrays)
*/
const { nome, openingHours, categories } = restaurant;
console.log(nome, openingHours, categories);

/* Se quisermos que o nome da variável seja diferente
do nome da propriedade, fazemos desta forma:*/
const {
  nome: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
/* Podemos ainda definir um valor default para caso a propriedade
não exista */
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

/* Caso seja necessário mudar variáveis, faremos desta forma: */
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(obj);

/* Desestruturar nested objects (objetos dentro de objetos) */
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
/* Podemos ainda criar novas variáveis:
const {
  fri: { open = o, close = c },
} = openingHours;
console.log(o, c);
*/

/*

Agora um exemplo prático bem interessante
de desestruturação;
- Muitas vezes, temos funções com vários parâmetros,
ficando difícil para quem está usando esta função
saber a ordem dos parâmetros. Então, ao invés de
definir os parâmetros manualmente, nós podemos passar
um objeto para a função como um argumento, e a função
desestruturá imediatamente o objeto;
- Voltamos para o objeto e criamos um novo método;
- Criamos a função orderDelivery dentro do objeto restaurant,
e que chamará um 'objeto' desestruturado como argumento;
- Em seguida, chamamos esta função para fora do objeto restaurant,
e como argumento usamos um objeto {} com vários itens dentro.
- Depois disso, chamamos este objeto como parâmetro, e dentro
dele os itens exatamente como são descritos no objeto para fora
da função.





 */
