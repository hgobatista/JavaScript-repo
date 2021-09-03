'use strict';

/*
Objetos, assim como arrays, são usados para salvar dados.
Porém, diferentemente de arrays, que você só consegue puxar um dado
pelo seu número, nos objetos é possível uma melhor estruturação.
*/

// Exemplo de array:
const hugoArray = [
    'Hugo',
    'Batista',
    2021 - 1994,
    'Estudante',
    ['Renato', 'Pedro', 'Leonardo']
];

// Usando o mesmo exemplo, porém com um objeto:
const hugo = { // Aqui são usadas chaves
    firstName = 'Hugo',
    lastName = 'Batista',
    age = 2021 - 1994,
    job = 'Estudante',
    friends = ['Renato', 'Pedro', 'Leonardo']    
};