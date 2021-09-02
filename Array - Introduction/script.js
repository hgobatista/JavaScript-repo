'use strict'
//Ao invés de separar os items em variáveis, podemos fazê-lo usando arrays

//Exemplo 1

const friend1 = 'Giovana';
const friend2 = 'Leonardo';
const friend3 = 'Ana';

const friends = ['Giovana', 'Steven', 'Peter'];
console.log(friends);

//Existe uma outra forma de criar array, porém menos utilizada
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); //usado para mostrar o dado na determinada posição
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.lenghth - 1]); //usado para mostrar o último dado do array

friends[2] = 'Jay'; //podemos substituir um dado, porém SOMENTE um.
console.log(friends);

const firstName = 'Hugo';
const hugo = [firstName, 'Batista', 2021 - 1994, 'estudante', friends]; //podemos incluir várias coisas, como variáveis, outros arrays, funções e cálculos
console.log(hugo);
console.log(hugo.lenght); //usado para descobrir o comprimento (quantidade de items) de um array

//Exercício exemplo
const calcAge = function (birthYear) {
    return 2021 - birthYear;
}
const anos = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.lenght - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]),
calcAge(years[years.length - 1])];
console.log(ages);