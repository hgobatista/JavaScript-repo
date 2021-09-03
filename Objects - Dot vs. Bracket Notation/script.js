'use strict';

const hugo = { // Aqui são usadas chaves
    firstName = 'Hugo',
    lastName = 'Batista',
    age = 2021 - 1994,
    job = 'Estudante',
    friends = ['Renato', 'Pedro', 'Leonardo']    
};
console.log(hugo);

console.log(hugo.lastName);
console.log(hugo['lastName']);

const nameKey = 'Name';
console.log(hugo['first' + nameKey]);
console.log(hugo['last' + nameKey]);

// console.log(hugo.'last' + nameKey) — impossível

const interestedIn = prompt('What do you want to know about Hugo? Choose between firstName, lastName, age, job and friends.');
console.log(hugo[interestedIn]);

// Quando é solicitada alguma informação que não está no objeto, aparece a mensagem: Undefined.

if(hugo[interestedIn]) {
    console.log(hugo[interestedIn]);
}else[
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
]

// Como adicionar novas propriedades aos objetos

hugo.location = 'Brasil';
hugo['instagram'] = '@hgobatista';
console.log(hugo);