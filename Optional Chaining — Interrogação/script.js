"use script";

const restaurant = {
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here's your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
  openingHours: {
    mon: {
      open: 22,
      close: 22,
    },
    wed: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
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

console.log(
  restaurant.openingHours.fri?.close ?? "The restaurant doesn't open on monday"
);

// Outro exemplo
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? `Closed`;
  console.log(`On ${day}, we open at ${open}`);
}

// Métodos - podemos checar se um método existe
// antes mesmo de chamá-lo!

console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
// Este método existe

console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");
// Já este não existe


// Optional Chaining também funciona em ARRAYS,
// podemos usar para saber se um array está vazio, por exemplo

const users = [
  {name: 'Hugo', email: 'contato@hugobatista.com'}
];
console.log(users[0]?.name ?? 'User array empty');
console.log(users[2]?.saldo ?? 'User array empty');