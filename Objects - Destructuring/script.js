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
      open: 21,
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

  orderDelivery: function(obj) {
    console.log(obj);
  }
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})

restaurant.orderDelivery({
  address: 'Via del Sole'
})

// Destructuring
const { nome, openingHours, categories } = restaurant;
console.log(nome, openingHours, categories);

//Mudar o nome das variáveis de dentro de um objeto
const {
  nome: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Para gerar valores Default, em caso de inexistencia de alguma variável, basta:
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mudando variáveis
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
//const { fri } = openingHours;
//console.log(fri);
const {
  fri: { open: o, close: c },
} = openingHours;
//console.log(open, close);
console.log(o, c);

