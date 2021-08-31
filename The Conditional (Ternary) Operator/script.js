/* Allow us to write something similar
to if else statement, but all in one line!
? - é como se fosse o if, que analisa se a primeira
condição é verdadeira ou não. Se for, o primeiro item
é o primeiro estado, caso nao seja, o : separa e adiciona
o segundo item.
*/

//Ternary 1
const age = 25;
age >= 18 ? console.log('I like to drink wine') :
console.log('I like do drink water!');

//Ternary 2 more simple
const drive = age >= 18 ? 'I can drive' : 'I cannot drive'; // isso tudo é uma expressão (produz um valor) e pode ser armazenada em uma variável
console.log (drive);