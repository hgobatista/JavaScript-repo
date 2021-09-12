"use strict";
/*
------------> Spread Operator <------------------
Podemos usar para basicamente expandir um array em vários
elementos.
Basicamente, descompactando todos os elementos de um array em um.
*/
//Digamos que temos um array
const arr = [7, 8, 9];
// Agora queremos criar um novo array baseado neste,
// mas com alguns elementos a mais no começo.
// Newbie way de fazer isso:
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);
// Esse jeito era comum antes do ES6, mas agora temos
// um novo operador = o spread operator (...)
const goodNewArray = [1, 2, ...arr];
console.log(goodNewArray);
// Se quisermos logar os elementos do array, sem ser
// dentro de um array, de forma separada, podemos usar
// o spread operator também!
console.log(...goodNewArray);

/* -------------------------------------- */

// Neste próximo exemplo, nós vamos criar um array
// com mais um item de comida no mainMenu array.
const restaurant = {
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here's your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
};
// Vamos então criar um novo menu:
const newMainMenu = [...restaurant.mainMenu, "Gnocci", "Burguer"];
console.log(newMainMenu);
// Desta forma, criamos um array completamente novo
// e não manipulamos o array original, apenas usamos
// ele para expandir seus itens.
console.log(...newMainMenu);
/* ---------------------------------------- */
// Você deve ter repadado que o spread operator
// é bastante semelhante ao destructuring, porque ele
// também nos ajuda a obter elementos fora dos arrays.
// A grande diferença é que o spread operator retira TODOS
// os elementos do array e não cria novas variáveis. Como
// consequência, podemos apenas usá-los em lugares que
// usaremos itens separados por vírgulas.
/* ---------------------------------------- */

// Agora, vamos aprender sobre dois importantes
// usos do spread operator, que é criar cópias
// superficiais de arrays e mesclar dois arrays
// em um array.

// Criando shallow copies (cópias superficiais)
const mainMenuCopy = [...restaurant.mainMenu];
const newMainMenuCopy = [...newMainMenu];
console.log(mainMenuCopy);
console.log(newMainMenuCopy);

// Para mesclar dois arrays ou mais (merge arrays)
// Como desafio, criaremos um array que mesclará todo o menu:
// mainMenu e starterMenu;
const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(allMenu);
/*
Spread operators trabalham em todos os iterables,
que são arrays, strings, maps e sets, MENOS OBJETOS.
*/
// Já que strings são iterables, vamos mostrar que
// o spread funciona nelas também.
const str = "Olá, Favucona";
// Agora, podemos criar um array com todas as letras
// e mais alguns elementos.
const letters = [...str, " ", "Popo."];
console.log(letters);
// Desta forma, criamos um array com todas as letras
// separadas.
console.log(...letters);
console.log(...str);
// Assim, retiramos os itens de dentro do array (horrível kkkk);

/*--------------------------------------------- */
/*
Agora, criaremos uma função que aceitará múltiplos
argumentos e então usaremos o spread operator para 
passar esses argumentos.
*/

// Criaremos um novo método dentro do OBJ restaurant que
// fará pedido apenas de massa, e a massa precisará sempre
// ter exatamente três ingredientes (orderPasta).

// Vamos receber estes ingredientes de uma janela prompt;
//const ingredients = [
//  prompt("Let's make pasta! Ingredient 1?"),
//  prompt("Let's make pasta! Ingredient 2?"),
//  prompt("Let's make pasta! Ingredient 3?"),
//];
// Jeito newbie:
//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// Jeito PRO:
//restaurant.orderPasta(...ingredients);

//----------------------------------------

// Desde 2018, os spread operators também funcionam
// em OBJETOS, mesmo eles NÃO SENDO iterables

// Bora testar!
// Vamos criar um novo objeto baseado em um objeto antigo
const newRestaurant = {
  ...restaurant,
  founder: "Hugo Batista",
  entregador: "Rato encomendas",
};
console.log(newRestaurant);
// Podemos criar também shallow copies de objetos!!
const newRestaurant2 = { ...newRestaurant };
console.log(newRestaurant2);
// Podemos também alterar coisas de dentro destes objetos
newRestaurant2.founder = "Hugo Fernando Batista";
console.log(newRestaurant2.founder, newRestaurant.founder);
// Observe que os nomes são diferentes
