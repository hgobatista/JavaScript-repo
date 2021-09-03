'use strict';

/*Métodos são funções nativas de JavaScript que possibilitam operações com funções,
adicionando itens, removendo, etc.
*/

/* Adicionar Elementos */
const friends = ['Michael', 'Fernando', 'Pedro'];
// friends.push ('Jay'); // Adiciona um item no FINAL do array;
// console.log(friends);
const newLength = friends.push('Jay'); // Sendo uma expressão, o valor que retorna é o length do array;
console.log(newLength); // Retorna o número 4, que é o comprimento do array;

friends.unshift('John'); // Adiciona um item no INÍCIO do array | Assim como o push, o unshift tb retorna o length do array;
console.log(friends);

/* Remover Elementos */
friends.pop(); // Remove o ÚLTIMO elemento | Não é necessário passar nenhum argumento dentro da função;
// const popped = friends.pop(); // Retorna não o length, e sim o elemento removido;
console.log(friends);

friends.shift(); // Remove o PRIMEIRO elemento | Também nao é precisa de nenhum argumento;
console.log(friends);

console.log(friends.indexOf('Fernando')); // Este método retorna a posição do item dentro do array;
console.log(friends.indexOf('Hugo')); // Caso o item não exista, ele retorna -1;

console.log(friends.includes('Fernando')); // ES6 método -> Retorna como verdadeiro ou falso, caso o item exista ou não no array;
console.log(friends.includes('Hugo')); // Esse método usa o 'Strict equality' para checar, fazendo com que '21' != 21, não existindo coerção tipográfica;

/* Há a possibilidade de usar o método includes em condicionais */
if (friends.includes('Michael')) {
    console.log('You have a friend called Michael.');
}else{
    console.log('You does not have a friend with this name.')
}