"use script";

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const [m, t, w, th, fri, sat, sun] = weekDays;
// podemos ainda usar várias formas para chamar o nome das propriedades;
const openingHours = {
  [fri]: {
    open: 22,
    close: 22,
  },
  [`day ${52 - 49}`]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};
console.log(openingHours);
const restaurant = {
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here's your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
  openingHours,
  /* ES6 enhanced literals:
    O que ele faz é pegar o objeto 'openingHours', colocar
    dentro do objeto 'restaurant' e criar uma propriedade
    com o mesmo nome do objeto.    
    */
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  /* Agora podemos escrever funções dentro dos objetos sem
    precisar colocar "function", assim como a 'order' e diferente
    da 'orderDelivery';
    */
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address = "Rua Be",
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
